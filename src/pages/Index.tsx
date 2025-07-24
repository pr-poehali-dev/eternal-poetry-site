import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const poems = [
    {
      title: "Дыхание",
      content: "Вдохни... и мир станет шире,\nВыдохни... и боль утихнет.\nТы здесь, ты жив, ты в мире.\nКаждый вдох — это надежда.",
      author: "Неизвестный"
    },
    {
      title: "Свет в окне",
      content: "За каждой тучей солнце ждёт,\nЗа каждой ночью день придёт.\nТы не один в своей печали,\nМы все когда-то начинали.",
      author: "Анна М."
    },
    {
      title: "Завтра",
      content: "Завтра будет новый день,\nИ возможно всё изменится.\nТо, что сегодня кажется концом,\nМожет стать началом счастья.",
      author: "Павел К."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-slate-800 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Icon name="BookOpen" size={32} className="text-gray-300" />
            <div>
              <h1 className="text-3xl font-bold font-serif">Мемориальная Поэзия</h1>
              <p className="text-gray-300 mt-1">Место памяти и надежды</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/img/6a00312a-a061-4051-bc9e-325e5c2962ef.jpg" 
              alt="Ива памяти" 
              className="w-32 h-32 mx-auto object-cover rounded-full shadow-lg opacity-80"
            />
          </div>
          
          <Badge variant="outline" className="mb-6 text-slate-600 border-slate-300">
            <Icon name="QrCode" size={16} className="mr-2" />
            QR-проект памяти
          </Badge>
          
          <h2 className="text-4xl font-bold text-slate-800 mb-6 font-serif leading-tight">
            Видишь, я тут? А ты жив
          </h2>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ты сейчас живой. Ты можешь вздохнуть — сделай это прямо сейчас. 
            Что давно хотел сделать? Я в тебя верю. А может тебе грустно? 
            Можешь мне рассказать, я тебя выслушаю.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-800 hover:bg-slate-700">
              <Icon name="Heart" size={20} className="mr-2" />
              Поговорить
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Читать стихи
            </Button>
          </div>
        </div>
      </section>

      {/* Personal Message Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-serif text-slate-800">
                Сообщение от души к душе
              </CardTitle>
              <CardDescription className="text-slate-600 text-lg">
                Меня тоже никто не понимал
              </CardDescription>
            </CardHeader>
            
            <CardContent className="text-center space-y-6">
              <div className="text-slate-700 leading-relaxed space-y-4 font-medium">
                <p>
                  Меня всю жизнь тоже никто не понимал, и я не мог ни с кем поговорить. 
                  У меня была депрессия, и мне было очень тяжело.
                </p>
                
                <p>
                  Я знаю, что такое — просыпаться и не понимать, зачем вставать. 
                  Когда кажется, что весь мир проходит мимо, а ты стоишь в стороне.
                </p>
                
                <p>
                  Выговорись мне. Я понимаю что такое одиночество, 
                  когда кажется, что никому нет дела до твоей боли.
                </p>
                
                <p className="text-lg font-semibold text-slate-800">
                  Но ты здесь. Ты дочитал до этих строк. Это уже что-то значит.
                  Ты ещё всё успеешь, ведь ты живой.
                </p>
              </div>
              
              <div className="flex justify-center pt-4">
                <Button className="bg-slate-700 hover:bg-slate-600">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать мне
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Poetry Library */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6">
              <img 
                src="/img/7a51efd6-f511-43df-843f-3690ee55f4c9.jpg" 
                alt="Книга поэзии" 
                className="w-24 h-24 mx-auto object-cover rounded-lg shadow-md opacity-90"
              />
            </div>
            
            <h3 className="text-3xl font-bold text-slate-800 mb-4 font-serif">
              Библиотека исцеления
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Стихи, которые помогают справиться с трудными моментами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poems.map((poem, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-slate-800">
                    {poem.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-500">
                    Автор: {poem.author}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-slate-700 leading-relaxed font-medium whitespace-pre-line">
                    {poem.content}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Button variant="ghost" size="sm" className="w-full">
                      <Icon name="Heart" size={16} className="mr-2" />
                      Помогло мне
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 font-serif">
            Как это работает
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="QrCode" size={24} className="text-slate-600" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Сканируй QR-код</h4>
              <p className="text-slate-600 text-sm">На мемориальной табличке</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} className="text-slate-600" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Получи поддержку</h4>
              <p className="text-slate-600 text-sm">Личное послание и стихи</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sunrise" size={24} className="text-slate-600" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Найди надежду</h4>
              <p className="text-slate-600 text-sm">Вспомни, что жизнь прекрасна</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="BookOpen" size={32} className="mx-auto mb-4 text-gray-300" />
          
          <h4 className="text-xl font-bold mb-4 font-serif">
            Этот сайт работает вечно и бесплатно
          </h4>
          
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            В память о тех, кто ушёл, но оставил свет в наших сердцах. 
            Для тех, кто ещё здесь и ищет смысл продолжать.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              <Icon name="Mail" size={16} className="mr-2" />
              Связаться
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              <Icon name="Info" size={16} className="mr-2" />
              О проекте
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-700 text-sm text-gray-400">
            <p>💝 Создано с любовью для тех, кому это нужно</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;