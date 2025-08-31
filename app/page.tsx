"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, TrendingUp, Sparkles, Youtube, ArrowRight, CheckCircle, Star, Play, Loader } from "lucide-react"

// Define the type for the analysis result based on the API response
interface AnalysisResult {
  id: string;
  title: string;
  description: string;
  duration: number;
  channel: {
    id: string;
    name: string;
  };
  tags: string[];
  thumbnail: string;
  uploadDate: string;
  viewCount: number;
  likeCount: number;
  transcriptLanguages: string[];
  geminiAnalysis: string;
}

export default function HomePage() {
  const [url, setUrl] = useState("")
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async () => {
    setIsLoading(true)
    setError(null)
    setAnalysis(null)

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to analyze video")
      }

      const data: AnalysisResult = await response.json()
      setAnalysis(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <Youtube className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              VideoMind
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
            >
              Возможности
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
            >
              Тарифы
            </a>
            <Button variant="outline" size="sm" className="hover:shadow-md transition-all duration-300 bg-transparent">
              Войти
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Начать
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge
            variant="secondary"
            className="mb-6 bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20 hover:scale-105 transition-transform duration-300"
          >
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Анализ видео с помощью ИИ
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Получите{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              суть видео
            </span>{" "}
            за секунды
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
            Вставьте ссылку на YouTube-видео и получите структурированный анализ: краткое изложение, ключевые темы и
            рекомендации о просмотре
          </p>

          {/* Input Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="p-6 shadow-2xl border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <div className="flex gap-3">
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                  className="flex-1 text-lg h-12 border-2 border-muted focus:border-primary/50 transition-all duration-300 focus:shadow-lg"
                  disabled={isLoading}
                />
                <Button
                  size="lg"
                  onClick={handleAnalyze}
                  disabled={isLoading || !url}
                  className="px-8 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <ArrowRight className="w-5 h-5 mr-2" />
                  )}
                  {isLoading ? "Анализ..." : "Анализировать"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3">Поддерживаются ссылки на YouTube и YouTube Shorts</p>
            </Card>
          </div>

          {/* Result Section */}
          <div className="max-w-3xl mx-auto text-left">
            {error && (
              <Card className="bg-destructive/10 border-destructive/50 text-destructive-foreground p-4">
                <p>
                  <strong>Ошибка:</strong> {error}
                </p>
              </Card>
            )}

            {analysis && (
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-card to-card/90 backdrop-blur-sm animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <a href={`https://youtube.com/watch?v=${analysis.id}`} target="_blank" rel="noopener noreferrer" className="relative group">
                      <img
                        src={analysis.thumbnail}
                        alt="Video thumbnail"
                        className="w-32 h-20 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </a>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 hover:text-primary transition-colors duration-300">
                        <a href={`https://youtube.com/watch?v=${analysis.id}`} target="_blank" rel="noopener noreferrer">
                          {analysis.title}
                        </a>
                      </CardTitle>
                      <div className="flex items-center flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {new Date(analysis.duration * 1000).toISOString().substr(11, 8)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {Intl.NumberFormat('ru-RU', { notation: 'compact' }).format(analysis.viewCount)} просмотров
                        </span>
                        <a href={`https://www.youtube.com/channel/${analysis.channel.id}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          {analysis.channel.name}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Описание</h4>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {analysis.description.substring(0, 300)}
                      {analysis.description.length > 300 && "..."}
                    </p>
                  </div>

                  {analysis.geminiAnalysis && (
                    <>
                      <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-primary" />
                          Анализ от Gemini
                        </h4>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                          {analysis.geminiAnalysis}
                        </p>
                      </div>
                    </>
                  )}

                  {analysis.tags && analysis.tags.length > 0 && (
                    <>
                      <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Теги</h4>
                        <div className="flex flex-wrap gap-2">
                          {analysis.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-muted/10 relative">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">VideoMind</span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Экономьте время и получайте максимум пользы от видеоконтента
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">ИИ-анализ</CardTitle>
                <CardDescription className="leading-relaxed">
                  Современные алгоритмы извлекают ключевую информацию и структурируют её для быстрого понимания
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Экономия времени</CardTitle>
                <CardDescription className="leading-relaxed">
                  Получите суть 30-минутного видео за 30 секунд. Решайте, стоит ли тратить время на просмотр
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Умные рекомендации</CardTitle>
                <CardDescription className="leading-relaxed">
                  Система оценивает полезность контента и дает персональные рекомендации о просмотре
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-gradient-to-r from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-blue-600 rounded flex items-center justify-center shadow-md">
                <Youtube className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                VideoMind
              </span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 VideoMind. Анализируем видео с помощью ИИ.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
