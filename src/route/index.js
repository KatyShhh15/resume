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

  router.get('/mac', function (req, res) {
    // res.render генерує нам HTML сторінку
  
    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('mac', {
      layout: 'mac',
      name: 'Apple MacBook Pro',
      description: 'The ultimate notebook for power users',
      price: 1999.99,
      category: 'Computers & Tablets',
      features: {
        processor: {
          brand: 'Intel',
          model: 'Core i9',
          speed: '2.3 GHz',
          cores: 8,
          cache: '16 MB',
        },
        memory: {
          type: 'DDR4',
          size: '32 GB',
          speed: '2666 MHz',
        },
        storage: {
          type: 'SSD',
          size: '1 TB',
        },
        display: {
          size: '16 inches',
          resolution: '3072x1920',
          technology: 'Retina',
          color_space: 'P3',
          brightness: '500 nits',
          refresh_rate: '60 Hz',
        },
        graphics: {
          brand: 'AMD',
          model: 'Radeon Pro 5500M',
          memory: '4 GB GDDR6',
        },
        ports: [
          {
            type: 'Thunderbolt 3',
            count: 4,
            features: [
              'Charging',
              'DisplayPort',
              'Thunderbolt (up to 40 Gbps)',
              'USB 3.1 Gen 2 (up to 10 Gbps)',
            ],
          },
          {
            type: 'HDMI',
            count: 1,
          },
        ],
        battery: {
          type: 'Lithium Polymer',
          capacity: '100 Wh',
          life: 'Up to 11 hours',
        },
        weight: '4.3 pounds',
        dimensions: {
          height: '0.64 inch',
          width: '14.09 inches',
          depth: '9.68 inches',
        },
        operating_system: 'macOS',
        accessories: [
          {
            name: 'Apple Magic Keyboard',
            price: 99.99,
          },
          {
            name: 'Apple Magic Mouse 2',
            price: 79.99,
          },
          {
            name: 'USB-C to USB Adapter',
            price: 19.99,
          },
        ],
      },
    })
    //                  ↑↑ сюди вводимо JSON дані
  })
  
  // ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
