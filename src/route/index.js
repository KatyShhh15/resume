// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
    position: 'Junior Fullstack JS Developer',
    salary: '600$ в місяць',
    address: 'Ukraine, Kharkiv',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  }
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
   
    page: {
      title: 'Resume | Summary',
    },
    
    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start 
        to work on a new project I learn the domain and try to understand the idea of the project. Good team 
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
           for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
   
    page: {
      title: 'Resume | Skills',
    },
    
    header,

    main: {
      skills: [
        {
          name:'HTML & NPM', 
          point: 10,
          isTop: true,
        },
        {
          name:'Handlebars & Terminal',
          point: 10,
          isTop: true,
        },
        {
          name:'VS Code',
          point: 9,
        },
        {
          name:'Git',
          point: 3,
          isTop: false,
        },
        {
          name:'React.js',
          point: 0,
        },
        {
          name:'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name:'Спортивно-бальні танці',
          isMain: true,
        },
        {
          name:'Акторське майстерство',
          isMain: false,
        },
        {
          name:'Катання на велосипеді',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
   res.render('education', {
    page: {
      title: 'Resume | Education',
    },
    
    header,

    main: {
      educations: [
        {
          name: 'ЗОШ №160',
          isEnd: true,
        },
        {
          name: 'ХНЕУ ім. Семена Кузнеця',
          isEnd: true,
        },
        {
          name: 'IT-Brains',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'English B2 level',
          id: 12345,
        },
        {
          name: 'FullStack',
          id: 54321,
        },
        {
          name: 'Kharkiv IT Cluster',
          id: 150502,
        },
      ],
    },

    footer,
  })
  })

  // ================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
   res.render('work', {

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },
    
    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'http://it-brains.com.ua/',
          },
          duration: {
            from: '18.05.2022',
            to: null,
          },
          progectAmount: 3,

          projects:[{
            name: 'Resume',
            url: 'http://resume.com.ua/',
            about: 'Airbnb competitor. Hight-load application for searching apartments.',
            stacks: [
              {
                name: 'React.js',
              },
              {
                name: 'HTML / CSS',
              },
              {
                name: 'Nodejs',
              },
            ],
            awards: [
              {
                name: 'Сертифікат Кенгуру',
              },
              {
                name: 'Сертифікат Соняшник',
              },
            ],
          },
        ],
        },
      ],
    },

    footer,
  })
  })

  router.get('/bootstrap', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
     res.render('bootstrap', {
      layout: 'bootstrap',
     })
     })

     // ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task22', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task22', {
    layout: 'task22',
    page_header: {
      title: 'InnovaMind',
      description: 'Welcome to our wonderful community',
    },
    section: {
      about_us: {
        title_list: {
          main: 'InnovaMind',
          sub: 'InnovaMind is a forward-thinking startup focused on innovation. We are dedicated to creating efficient and powerful software through the use of first-class functions.',
        },
        button: { text: 'Show more' },
      },
      advantage: {
        title: 'Advantage',
        efficiency: {
          title: 'Efficiency',
          sub_title: 'Streamline your software development',
          description:
            'Streamline your software development with our innovative platform...',
          button: 'Show more',
        },
        innovation: {
          title: 'Innovation',
          sub_title:
            'Forward-thinking approach to programming',
          description:
            ' Stay ahead of the curve with our forward-thinking approach to programming...',
          button: 'Show more',
        },
        collaboration: {
          title: 'Collaboration',
          sub_title: 'Connect with like-minded developers',
          description:
            'Connect with a community of like-minded developers to share knowledge and insights...',
          button: 'Show more',
        },
      },
      agreement: {
        title: 'Terms of use',
        info: {
          sub_title: 'Check out our requirements',
          detail: {
            text: 'By using or accessing the service, you agree to be bound by the terms and conditions outlined in the agreement.',
            button: 'Аccept',
          },
        },
      },
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
