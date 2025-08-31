import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Youtube, Github, Chrome, ArrowRight, Sparkles, CheckCircle } from "lucide-react"

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Youtube className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">VideoMind</h1>
                <p className="text-muted-foreground">Анализ видео с помощью ИИ</p>
              </div>
            </div>

            <Badge variant="secondary" className="w-fit">
              <Sparkles className="w-4 h-4 mr-2" />
              Более 10,000 пользователей доверяют нам
            </Badge>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-balance">Получайте суть любого YouTube-видео за секунды</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Умный анализ контента</h3>
                  <p className="text-sm text-muted-foreground">
                    ИИ извлекает ключевые темы, создает краткое изложение и оценивает полезность видео
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Экономия времени</h3>
                  <p className="text-sm text-muted-foreground">
                    Решайте, стоит ли смотреть видео, не тратя время на просмотр
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">История и аналитика</h3>
                  <p className="text-sm text-muted-foreground">
                    Сохраняйте анализы, отслеживайте статистику и экспортируйте результаты
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="lg:hidden flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">VideoMind</span>
              </div>
              <CardTitle className="text-2xl">Добро пожаловать</CardTitle>
              <CardDescription>
                Войдите в аккаунт или создайте новый для доступа к расширенным возможностям
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Login */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full bg-transparent">
                  <Chrome className="w-4 h-4 mr-2" />
                  Войти через Google
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Github className="w-4 h-4 mr-2" />
                  Войти через GitHub
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Или с помощью email</span>
                </div>
              </div>

              {/* Email Form */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Войти
                </Button>
              </div>

              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Нет аккаунта?{" "}
                  <Button variant="link" className="p-0 h-auto font-normal">
                    Зарегистрироваться
                  </Button>
                </p>
                <Button variant="link" className="p-0 h-auto text-sm font-normal">
                  Забыли пароль?
                </Button>
              </div>

              {/* Features for logged users */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium mb-3">Преимущества аккаунта:</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>100 анализов в месяц</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>История всех анализов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Экспорт в PDF и Markdown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Приоритетная обработка</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
