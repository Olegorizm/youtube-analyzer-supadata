import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Clock,
  Youtube,
  ArrowRight,
  CheckCircle,
  Star,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  BarChart3,
  History,
  Settings,
  LogOut,
  Plus,
} from "lucide-react"

export default function DashboardPage() {
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
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm">
              <Badge
                variant="outline"
                className="bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/30 text-primary font-medium"
              >
                Pro Plan
              </Badge>
              <span className="text-muted-foreground">42/100 анализов</span>
            </div>
            <Avatar className="w-8 h-8 ring-2 ring-primary/20 shadow-md">
              <AvatarImage src="/diverse-user-avatars.png" />
              <AvatarFallback className="bg-gradient-to-br from-primary/10 to-blue-600/10 text-primary font-semibold">
                ИП
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <nav className="space-y-2">
                  <Button
                    variant="secondary"
                    className="w-full justify-start bg-gradient-to-r from-primary/10 to-blue-600/10 hover:from-primary/20 hover:to-blue-600/20 border-0 shadow-sm"
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Обзор
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-gradient-to-r hover:from-primary/5 hover:to-blue-600/5 transition-all duration-300"
                  >
                    <History className="w-4 h-4 mr-2" />
                    История
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-gradient-to-r hover:from-primary/5 hover:to-blue-600/5 transition-all duration-300"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Настройки
                  </Button>
                  <Separator className="my-4 bg-gradient-to-r from-transparent via-border to-transparent" />
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-all duration-300"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Выйти
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Quick Analysis */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-card to-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-blue-600 rounded-md flex items-center justify-center">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                  Новый анализ
                </CardTitle>
                <CardDescription>Вставьте ссылку на YouTube-видео для анализа</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Input
                    placeholder="https://youtube.com/watch?v=..."
                    className="flex-1 border-2 border-muted focus:border-primary/50 transition-all duration-300 focus:shadow-lg"
                  />
                  <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Анализировать
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Всего анализов</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        127
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center shadow-lg">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Время сэкономлено</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent">
                        24ч
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600/10 to-blue-600/20 rounded-lg flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Средняя оценка</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-foreground to-amber-500 bg-clip-text text-transparent">
                        4.2
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/10 to-amber-500/20 rounded-lg flex items-center justify-center shadow-lg">
                      <Star className="w-6 h-6 text-amber-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Analysis */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-card to-card/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground">Последние анализы</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:shadow-md transition-all duration-300 bg-transparent border-2"
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Фильтр
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:shadow-md transition-all duration-300 bg-transparent border-2"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Поиск
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Analysis Item 1 */}
                <div className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-gradient-to-r hover:from-primary/5 hover:to-blue-600/5 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative group">
                    <img
                      src="/tech-review-thumbnail.png"
                      alt="Video thumbnail"
                      className="w-20 h-12 rounded object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Youtube className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate hover:text-primary transition-colors duration-300">
                      Обзор нового iPhone 15 Pro - стоит ли покупать?
                    </h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        15:32
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />2 дня назад
                      </span>
                      <Badge variant="outline" className="text-xs bg-green-50 border-green-200 text-green-700">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Рекомендуем
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                      Подробный обзор iPhone 15 Pro с акцентом на новую камеру, процессор A17 Pro и титановый корпус...
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-all duration-300">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                {/* Analysis Item 2 */}
                <div className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-gradient-to-r hover:from-primary/5 hover:to-blue-600/5 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative group">
                    <img
                      src="/programming-tutorial-thumbnail.png"
                      alt="Video thumbnail"
                      className="w-20 h-12 rounded object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Youtube className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate hover:text-primary transition-colors duration-300">
                      React 18 - новые возможности и миграция
                    </h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        28:45
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />5 дней назад
                      </span>
                      <Badge variant="secondary" className="text-xs bg-amber-50 border-amber-200 text-amber-700">
                        <Star className="w-3 h-3 mr-1" />
                        Высокая оценка
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                      Обзор новых функций React 18, включая Concurrent Features, Suspense и автоматический батчинг...
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-all duration-300">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                {/* Analysis Item 3 */}
                <div className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-gradient-to-r hover:from-primary/5 hover:to-blue-600/5 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative group">
                    <img
                      src="/business-strategy-video-thumbnail.png"
                      alt="Video thumbnail"
                      className="w-20 h-12 rounded object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Youtube className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate hover:text-primary transition-colors duration-300">
                      Стратегии роста стартапа в 2024 году
                    </h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        42:18
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />1 неделя назад
                      </span>
                      <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                        Полезно
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                      Практические советы по масштабированию бизнеса, привлечению инвестиций и построению команды...
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-all duration-300">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
