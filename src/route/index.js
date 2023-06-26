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
// Підключаємо роутер до бек-енду

router.get('/facebook', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('facebook', {
    layout: 'facebook',
    name: 'Facebook',
    users: [
      {
        id: 1,
        name: 'John Doe',
        gender: 'Male',
        age: 30,
        friends: [
          {
            id: 2,
            name: 'Jane Smith',
            gender: 'Female',
            age: 27,
            mutual_friends: [
              {
                id: 4,
                name: 'Samantha Lee',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 5,
            name: 'Mike Williams',
            gender: 'Male',
            age: 28,
            mutual_friends: [
              {
                id: 7,
                name: 'David Kim',
                gender: 'Male',
                age: 29,
              },
            ],
          },
        ],
        groups: [
          {
            id: 1,
            name: 'Hiking Enthusiasts',
            description:
              'A group for people who love hiking and the great outdoors',
            members: [
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 2,
            name: 'Foodies United',
            description:
              'A group for food lovers to share recipes and restaurant recommendations',
            members: [
              {
                id: 5,
                name: 'Mike Williams',
                gender: 'Male',
                age: 28,
              },
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
        ],
      },
      {
        id: 16,
        name: 'Amy Lee',
        gender: 'Female',
        age: 30,
        friends: [
          {
            id: 15,
            name: 'Peter Kim',
            gender: 'Male',
            age: 32,
            mutual_friends: [
              {
                id: 17,
                name: 'David Chen',
                gender: 'Male',
                age: 33,
              },
              {
                id: 19,
                name: 'Erica Wong',
                gender: 'Female',
                age: 29,
                mutual_friends: [
                  {
                    id: 20,
                    name: 'Alex Lee',
                    gender: 'Male',
                    age: 31,
                  },
                ],
              },
            ],
            groups: [
              {
                id: 3,
                name: 'Travel Addicts',
                description:
                  'A group for people who love to travel and explore new places',
                members: [
                  {
                    id: 22,
                    name: 'Jackie Chen',
                    gender: 'Female',
                    age: 26,
                  },
                ],
              },
              {
                id: 4,
                name: 'Pet Lovers',
                description:
                  'A group for people who love their furry friends',
                members: [
                  {
                    id: 16,
                    name: 'Amy Lee',
                    gender: 'Female',
                    age: 30,
                  },
                  {
                    id: 25,
                    name: 'John Smith',
                    gender: 'Male',
                    age: 33,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================
module.exports = router
