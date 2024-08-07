const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


export const projectsData = [
    {
        id : 80, 
        title : 'Mobile cofee website redesign',
        desc : "Client latest website was an awful example of development , performace and ui ux design . At the start , I redesigned the whole website plus a digital menu with lot of features such as Search option , category buttons , persion and english support , call action buttons and etc to provide a fast and accessible menu for customers to find their item as soon as possible. I have used the greate power of Next js and tailwind css to create a compatible app that can be use in any dimension of screens  ",
        types : [4],
        images : [
            '/images/projects/mobilecafe/1.jpg',
            '/images/projects/mobilecafe/2.jpg',
            '/images/projects/mobilecafe/3.jpg',
            '/images/projects/mobilecafe/4.jpg',
            '/images/projects/mobilecafe/5.jpg',
            '/images/projects/mobilecafe/6.jpg',
            '/images/projects/mobilecafe/7.jpg',
        ],
        client : 'Mobile coffee',
        clientDesc : 'Cafe',
        clientImg : '/images/projects/mobilecafe/client.webp',
        techs : [0 , 1 , 5 , 10],
        createdAt : '',
        link : 'https://mobilecafe.netlify.app/',
    },

    {
        id : 2, 
        title : 'Simon pavilion site & menu redesign',
        desc : "One my favorites digital menus that I've recently worked on it . The project was a complete redesign and development cause of latest website they were using  had such a bad ui desgin and user experiance and with low site speed and no features . Sadly the project got decliend from the client and never got upload to their main server .",
        types : [4],
        images : [
            '/images/projects/simon/1.jpg',
            '/images/projects/simon/2.jpg',
            '/images/projects/simon/3.jpg',
            '/images/projects/simon/4.jpg',
            '/images/projects/simon/5.jpg',
            '/images/projects/simon/6.jpg',
            '/images/projects/simon/7.jpg',
        ],
        client : 'Simon pavilion',
        clientDesc : 'Cafe , grill station and restaurant',
        clientImg : '/images/projects/simon/client.png',
        techs : [0 , 1 , 5 , 11],
        createdAt : '',
        link : 'https://menusimon.netlify.app/',
    },

    {
        id : 3, 
        title : 'Real estate + CMS web application',
        desc : "Real estate web application desgin , providing a great and easy access for customers to properties .The project has 3 diffrent authentications rols (Admin , Agent , User) . Admin can control diffrent parts of the application like deleting , editing uploaded estates , kick users , controling agents , answering and receiving requests plus messages from agents and users . Estate pages are based on SSG  and dashboard is based on SSR . Users can create accounts and add theri specify estate to their favorite list . ",
        types : [2 , 3],
        images : [
            '/images/projects/real-estate/1.jpg',
            '/images/projects/real-estate/2.jpg',
            '/images/projects/real-estate/3.jpg',
            '/images/projects/real-estate/4.jpg',
            '/images/projects/real-estate/5.jpg',
            '/images/projects/real-estate/6.jpg',
            '/images/projects/real-estate/7.jpg',
        ],
        techs : [11 , 0 , 1 , 5 , 15 , 20],
        createdAt : '',
        link : 'https://github.com/Arsi-gh/real-estate-project',
    },

    {
        id : 4, 
        title : 'Plant store e-commerce web application',
        desc : "I've started this project at first with the ui design. I've used react plus tailwind css to develop a fast and best practice e-commerce web application . The project has 2 diffrent authentication roles ( Admin and user) . Admin has options like user and product list , a complete report of day , month and the year , events panel , tickets , off code and transations control . The basket page has 3 diffrent levels of complition with user step guide that to create a better UX expreince . the project is completly responsive and can be display in both moblie and desktop displays.",
        types : [0 , 3],
        images : [
            '/images/projects/plnat-store/1.jpg',
            '/images/projects/plnat-store/2.jpg',
            '/images/projects/plnat-store/3.jpg',
            '/images/projects/plnat-store/4.jpg',
            '/images/projects/plnat-store/5.jpg',
            '/images/projects/plnat-store/6.jpg',
            '/images/projects/plnat-store/7.jpg',
        ],
        techs : [2 , 0 , 6 , 11 , 20 , 10 , 17],
        createdAt : '',
        link : 'https://plant-shopping-store.netlify.app/',
    },

    {
        id : 5, 
        title : 'Shanderman menu development',
        desc : 'Shanderman digital menu. Creating responsive and optional digital menu and providing easy access as fast as possible for the consumer . The project is a SPA website powerd by amazing features of Next js and styling with tailwind css to be the best in all standards , best practices and accessibility .',
        types : [4],
        images : [
            '/images/projects/shanderman/1.jpg',
            '/images/projects/shanderman/2.jpg',
            '/images/projects/shanderman/3.jpg',
            '/images/projects/shanderman/4.jpg',
            '/images/projects/shanderman/5.jpg',
        ],
        client : 'Shanderman',
        clientDesc : 'Cafe and fastfood restaurant',
        clientImg : '',
        techs : [0 , 1 , 5],
        createdAt : '',
        link : 'https://shanderman.com/',
    },
]