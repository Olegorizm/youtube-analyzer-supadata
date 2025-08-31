import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Clock,
  Users,
  ThumbsUp,
  Share2,
  Download,
  CheckCircle,
  Star,
  Youtube,
  Calendar,
  TrendingUp,
  MessageSquare,
  Bookmark,
  Copy,
  ExternalLink,
} from "lucide-react"

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Youtube className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">VideoMind</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Поделиться
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Экспорт
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Video Info */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-80 flex-shrink-0">
                <img
                  src="/tech-review-iphone-15-pro-thumbnail.png"
                  alt="Video thumbnail"
                  className="w-full rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-3">Полный обзор iPhone 15 Pro - революция или эволюция?</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    15:32
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    1.2M просмотров
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    45K лайков
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Опубликовано 3 дня назад
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Канал: <span className="text-foreground font-medium">TechReview Pro</span>
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Рекомендуем к просмотру
                  </Badge>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Смотреть на YouTube
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analysis Results */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Analysis */}
          <div className="lg:col-span-2 space-y-6">
            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Краткое изложение
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Подробный 15-минутный обзор iPhone 15 Pro от популярного технологического канала. Автор детально
                  рассматривает ключевые нововведения: новую камеру с 48MP сенсором, процессор A17 Pro на 3-нанометровом
                  техпроцессе, титановый корпус и переход на USB-C.
                </p>
                <p className="text-foreground leading-relaxed">
                  Особое внимание уделяется сравнению с iPhone 14 Pro и конкурентами на Android. Автор проводит
                  практические тесты камеры, производительности и времени работы батареи. В заключении дается четкая
                  рекомендация о целесообразности покупки для разных категорий пользователей.
                </p>
                <p className="text-foreground leading-relaxed">
                  Видео содержит актуальную информацию о ценах, доступности в разных регионах и сравнение с предыдущими
                  поколениями iPhone. Качество съемки и подачи материала - высокое.
                </p>
              </CardContent>
            </Card>

            {/* Key Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Ключевые темы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-sm">
                      Камера и фотография
                    </Badge>
                    <span className="text-sm text-muted-foreground">35% времени</span>
                  </div>
                  <Progress value={35} className="h-2" />

                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-sm">
                      Процессор A17 Pro
                    </Badge>
                    <span className="text-sm text-muted-foreground">25% времени</span>
                  </div>
                  <Progress value={25} className="h-2" />

                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-sm">
                      Дизайн и материалы
                    </Badge>
                    <span className="text-sm text-muted-foreground">20% времени</span>
                  </div>
                  <Progress value={20} className="h-2" />

                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-sm">
                      Цена и доступность
                    </Badge>
                    <span className="text-sm text-muted-foreground">15% времени</span>
                  </div>
                  <Progress value={15} className="h-2" />

                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-sm">
                      Сравнение с конкурентами
                    </Badge>
                    <span className="text-sm text-muted-foreground">5% времени</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Временная шкала</CardTitle>
                <CardDescription>Основные моменты видео</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-sm font-mono text-muted-foreground w-16">0:00</div>
                  <div className="flex-1">
                    <p className="font-medium">Введение и анонс обзора</p>
                    <p className="text-sm text-muted-foreground">Краткий обзор того, что будет рассмотрено</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-sm font-mono text-muted-foreground w-16">2:15</div>
                  <div className="flex-1">
                    <p className="font-medium">Дизайн и первые впечатления</p>
                    <p className="text-sm text-muted-foreground">Титановый корпус, новые цвета, эргономика</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-sm font-mono text-muted-foreground w-16">5:30</div>
                  <div className="flex-1">
                    <p className="font-medium">Тестирование камеры</p>
                    <p className="text-sm text-muted-foreground">Примеры фото и видео, сравнение с iPhone 14 Pro</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-sm font-mono text-muted-foreground w-16">9:45</div>
                  <div className="flex-1">
                    <p className="font-medium">Производительность A17 Pro</p>
                    <p className="text-sm text-muted-foreground">Бенчмарки, игры, энергоэффективность</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-sm font-mono text-muted-foreground w-16">13:20</div>
                  <div className="flex-1">
                    <p className="font-medium">Заключение и рекомендации</p>
                    <p className="text-sm text-muted-foreground">Стоит ли покупать, для кого подходит</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rating */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Оценка полезности</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4.8</div>
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Высокая информативность</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Качество контента</span>
                    <span className="font-medium">Отлично</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Актуальность</span>
                    <span className="font-medium">Высокая</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Глубина анализа</span>
                    <span className="font-medium">Подробно</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Действия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Сохранить в избранное
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Copy className="w-4 h-4 mr-2" />
                  Копировать анализ
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Статистика</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Время анализа</span>
                  <span className="font-medium">23 сек</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Слов в транскрипте</span>
                  <span className="font-medium">2,847</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Уровень сложности</span>
                  <span className="font-medium">Средний</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Язык</span>
                  <span className="font-medium">Русский</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
