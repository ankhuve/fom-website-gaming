// var Bs = require('bootstrap-sass');

import Modal from './components/modal.vue';

/** Set Vue debug mode **/
Vue.config.debug = true;

/** Components **/
Vue.component('modal', Modal);

const app = new Vue({
    el: '#app',
    data: {
        showModal: false,
        projects: {
            1:{
                name: 'SenseX',
                tags: {
                    1: 'Social Sensor-based Games',
                    2: 'Collaborative gaming',
                    3: 'Body sensors',
                    4: 'AR',
                    5: 'Computer moderated',
                },
                description: {
                    paragraphs: {
                        1:'In the future, we imagine that accurate and efficient digital sensors have helped create '+
                        'a market for social sensor-based games (Social SBGs). As more people have grown up with computer games,'+
                        'playing games together is seen more as a natural activity. Team adventure games, in the style of '+
                        'Laserdome or Escape room, are an increasingly more popular activity for after work parties, birthdays'+
                        'and so on. These venues have the resources to provide a wide variety of sensor equipment, enabling '+
                        'exciting sensor based team adventure games. In our concept, we imagine an AR team adventure game that '+
                        'utilizes sensors such as heart rate monitor, electrodermal activity (EDA) sensor, accelerometer and '+
                        'indoor positioning system (IDS).',
                        2: 'In the game, key obstacles will have to be overcome by collaboration measured by different means of'+
                        'accurate sensing technologies.'
                    }
                },
                contributors: {
                    1: "Anton Sivertsson",
                    2: "Emil Westin",
                    3: "Gabriella Sanchez Karlsson",
                    4: "Lars Gribbe",
                    5: "Rasmus Berggrén"
                },
                styleObject: {
                    backgroundColor: '#FFFFFF',
                    backgroundImage: "url('../img/projects/senseX.png')"
                }
            },
            2:{
                name: 'Uniboard',
                tags: {
                    1: 'Universal boardscreen',
                    2: 'Light sensitive surface',
                    3: 'Holographic',
                    4: 'Game master assistant',
                    5: 'Togetherness',
                },
                description: {
                    paragraphs: {
                        1:'The trend of digitizing traditional media and collecting it in one place has been accelerating for the last\
                        couple of years. Newspapers are replaced with news on the web. Physical copies of music and movies\
                        are replaced with streaming services like Spotify and Netflix. We want to continue this trend by\
                        integrating all board games into a single platform.',
                        2: 'Introducing Uniboard.',
                        3: 'Uniboard is an all-in-one game board package including a touch and light sensitive screen, bendable\
                        screens used for playing cards, tangible digital dice and lastly, holographic figurines. Uniboard is\
                        capable of saving, resuming and sharing the current game state effortlessly. Furthermore the Uniboard\
                        also includes an infinite amount of games through a digital game store. Just download the full game to\
                        the Uniboard’s memory and play straight away. We think that Uniboard will revolutionize the way we play\
                        board games and bring people together even more than before.'
                    }
                },
                contributors: {
                    1: "Marcus Ahlström",
                    2: "Fredrik Berglund",
                    3: "Michaela Sjöberg",
                    4: "Arvid Sätterkvist"
                },
                styleObject: {
                    backgroundColor: '#FFFFFF',
                    backgroundImage: "url('../img/projects/uniboard.png')"
                }
            },
            3:{
                name: 'Virtual Companion',
                tags: {
                    1: 'Virtual Companion',
                    2: 'Gaming culture',
                    3: 'Companionship',
                    4: 'Cosplay',
                    5: 'Fandom',
                },
                description: {
                    paragraphs: {
                        1: 'In the future, people are playing more games and are therefore getting more attached to gaming characters. In addition to this, people look up to virtual characters such as Hatsune Miku but, also want to have these characters integrated in their life.',
                        2: 'While cosplay is well developed within the gaming culture in, e.g. Japan, cosplay is growing in the western world as well. Sweden hosted a Nordic Cosplay championship within cosplay, which has recently been streamed through the national tv channel SVT.',
                        3: 'Combining this problem with the growing display of gaming culture and fandom, we propose virtual companions. Based on the mixed reality technology, we believe that having your favorite gaming character by your side to express yourself and your passion will be the future of gaming culture.'
                    }
                },
                contributors: {
                    1: "Corinna Böker",
                    2: "Tove Johansson",
                    3: "Isabella Landström",
                    4: "Denise Lordin",
                    5: "Yiwen Lu"
                },
                styleObject: {
                    backgroundColor: '#FFFFFF',
                    backgroundImage: "url('../img/projects/virtual_companion.png')"
                }
            },
            4:{
                name: 'Ioco',
                tags: {
                    1: '3D Projections',
                    2: 'Branded Advertisement',
                    3: 'Interactive Games',
                    4: 'Geolocated Marketing',
                    5: 'Discount',
                },
                description: {
                    paragraphs: {
                        1: 'The future of games and ads is personalized and lies within interaction, individual choice and collaboration. Our app idea “ioco” institutes the smart way of effective, target-oriented ad displays through hologram-like, branded 3D projections that will henceforth be instated in various places around the city. When the localization function is activated, the present installments can be tracked via the app proposing the user individual, customer-specific brands to their current needs. In order to collect the points of the brand instalment and gain favored discounts, users have to interact with the 3D images by diverse game options of various effort levels. One time-sensitive way of access, targeting specifically discount hunters, is a simple hand movement, while another option attractive for commuters is playing a short game created by the specific company.',
                    }
                },
                contributors: {
                    1: "Marion Geissler",
                    2: "Stina Hübinette",
                    3: "Elin Lindahl",
                    4: "Dovile Trepkeviciute",
                    5: "Elvira Wiklund"
                },
                styleObject: {
                    backgroundColor: '#FFFFFF',
                    backgroundImage: "url('../img/projects/ioco.jpg')"
                }
            },
            5:{
                name: 'Kitchen Kombat',
                tags: {
                    1: 'Gamification',
                    2: 'Kitchen',
                    3: 'Combat',
                    4: 'Cooking',
                    5: 'Socializing',
                },
                description: {
                    paragraphs: {
                        1: 'Kitchen Kombat is a gamification concept taking place in the kitchen. It aims at encouraging users to have fun while learning how to become better at cooking. It does so by introducing game elements such as:',
                        2: 'Different game modes including task completion and multiplayer competition, AR and audio instructions, instant feedback, experience points for unlocking new features and ranking.',
                        3: 'A kitchen is used as the game arena and can be shared between family members or friends. The users in a game arena can compete with each other doing a specific kitchen task such as a cooking skill etc.',
                        4: 'By comparing experience points, the game can indicate who’s taking the most responsibility in a certain game arena, for example the dishes, and encourage those who are behind to help out.',
                        5: 'The game also motivates social interaction between users in the same game arena or users in the same neighborhood.',
                        6: 'Kitchen Kombat also encourages interaction within neighborhoods by enabling cooking competitions with your neighbours, or cooking for each other.',
                    }
                },
                contributors: {
                    1: "Hannah Lenczuk",
                    2: "Jun Li",
                    3: "Carl Sténson",
                    4: "Andreas Sylvan",
                    5: "Wasita Witchutraiphob"
                },
                styleObject: {
                    backgroundColor: '#FFFFFF',
                    backgroundImage: "url('../img/projects/kitchen_kombat.png')"
                }
            },
            6:{
                name: 'Magic Run',
                tags: {
                    1: 'Pervasive games',
                    2: 'Smart street sports',
                    3: 'Exergame',
                    4: 'Fitness',
                    5: 'AR',
                },
                description: {
                    paragraphs: {
                        1: 'Running is the game and the real world is your playground!',
                        2: 'Run around in the most wonderful place that you can imagine: the real world. It just requires a little magic to turn it into a place full of miracles that you can explore on your favourite running routes. Turn your exercise session into an adventure and jump as high as you can to reach the floating stars, avoid lava balls, stamp evil plants into the ground and run as fast as you can to catch the white rabbit.',
                        3: 'Experience all this in a Magic Run. Beat your previous high score, cooperate together with your friends and family or challenge them. It is up to you how fast the white rabbit will run: the flexible difficulty setting makes Magic Run the perfect game for both ambitious hobby runners as well as a fun activity for families. You can choose one of the training schedule presets for high intense training or create your own. You will see how easy and fun it suddenly becomes to reach your training goals.',
                        4: 'Get out, be a hero and run the magic run!'
                    }
                },
                contributors: {
                    1: "Björn Lundkvist",
                    2: "Maria Krinaki",
                    3: "Nino Prekratić",
                    4: "Marina Cherkasova",
                    5: "Lisa Schmitz"
                },
                styleObject: {
                    backgroundColor: '#FFFFFF',
                    backgroundImage: "url('../img/projects/magic_run.png')"
                }
            },
            7:{
                name: 'Holosport',
                tags: {
                    1: 'Mixed reality',
                    2: 'eSport',
                    3: 'Entertainment',
                    4: 'Social',
                },
                description: {
                    paragraphs: {
                        1: 'Our idea is to give people a new and exciting way to watch broadcasted eSport by using mixed reality. The idea is to, either with the use of technology such as wearable glasses/lenses or with a device put on a table, create a mixed reality version of the game on the table in front of you. Imagine a virtual board game where you do not play but watch the action from above and have the possibility to change the perspective of the view itself. This would allow you to move around the table and look at the game from different angles. We believe that our idea can change not only the way people watch eSport but also increase the spread of eSport as entertainment.',
                    }
                },
                contributors: {
                    1: "Isabella Richiello",
                    2: "Niklas Gustavsson",
                    3: "Jonathan Söderin",
                    4: "Marcus Frisell",
                    5: "Shiyao Wang"
                },
                styleObject: {
                    backgroundColor: '#FFFFFF',
                    backgroundImage: "url('../img/projects/holosport.png')"
                }
            },
            8:{
                name: 'Mosys',
                tags: {
                    1: 'Moral systems',
                    2: 'Prosocial',
                    3: 'Impact learning',
                    4: 'Educational games',
                },
                description: {
                    paragraphs: {
                        1: 'MOSYS plays a bridging role between governmental institutions and video game designers specialized in the development of first-person shooters.  As the characteristics of such video games are integral components of the ongoing dispute if violent video games create aggression, MOSYS pursues a proactive way in resolve this conflict of interests. Through a well thought-out design and integration of moral systems into first-person shooters MOSYS enables both, the teaching of a behavior besides killing opponents and keeping the nature of the first-person shooter as engaging and immersive as before. Instead of reactive approaches, governmental institutions can take a proactive role by funding video game designers when using the solutions of MOSYS.'
                    }
                },
                contributors: {
                    1: "Fredrik Eliasson",
                    2: "Linn Lahtinen",
                    3: "Leo Preschl",
                    4: "Jing Yang",
                    5: "Lubaina Zia"
                },
                styleObject: {
                    backgroundColor: '#FFFFFF',
                    backgroundImage: "url('../img/projects/mosys.png')"
                }
            },
            9:{
                name: 'Omnius',
                tags: {
                    1: 'Artificial intelligence',
                    2: 'Personalized',
                    3: 'Emerging narrative',
                    4: 'Software',
                    5: 'Framework',
                },
                description: {
                    paragraphs: {
                        1: 'Inspired by today’s shift towards adaptive gameplay, which generates such elements as weather, foes and entire planets depending on the player’s choices, we present the Omnius narrative AI system. Where previous game systems have focused primarily on improving the gameplay within a rigid story, we look to leverage the medium’s interactivity to make for a much more compelling and personalized narrative.',
                        2: 'Rather than being directly responsible for a game’s plot, game writers using Omnius instead focus on such broader-scope narrative such as world building and characters. Additionally, they would have to decide which parameters to keep track of in the user’s play style, and how to adapt the game to make it as engaging as possible. With the rules and boundaries set by the designers and writers, Omnious helps players tell a unique and personalized story through their gameplay.'
                    }
                },
                contributors: {
                    1: "Lisa Torekull",
                    2: "Maria Hjorth",
                    3: "Julian Tunru",
                    4: "Haisheng Yu",
                    5: "Hongting Pan"
                },
                styleObject: {
                    backgroundColor: '#FFFFFF',
                    backgroundImage: "url('../img/projects/omnius.png')"
                }
            },
            10:{
                name: 'ME Gaming',
                tags: {
                    1: 'Movement',
                    2: 'Dancing',
                    3: 'Gaming',
                    4: 'Sensors',
                    5: 'Hologram',
                    6: 'Drones',
                },
                description: {
                    paragraphs: {
                        1: 'In future movement based games the entire body will be involved. Sensors, holograms, VR and similar devices will be affordable and existing in every home and far more developed than they are today. These devices will be portable, more accurate and flexible and you will not be disrupted by uncomfortable glasses and limited by space and place. Advanced technology scans and react on every movement of the body. One example of a future movement based game could be a dance game. Here you can learn how to dance or dance battle with friends, no matter which level you are on. The key to this game is high level of customization, you are free to chose where to dance, what to dance, and how to dance. The goal with future movement based games is to make your game experience immersive and interactive on a complete different level than existing movement based games today.'
                    }
                },
                contributors: {
                    1: "Emelie Dellgren",
                    2: "Maria Opanasenko",
                    3: "Wei Wang",
                    4: "Filip Mori"
                },
                styleObject: {
                    backgroundColor: '#FFFFFF',
                    backgroundImage: "url('../img/projects/me_gaming.png')"
                }
            },
            11:{
                name: 'Float',
                tags: {
                    1: 'Indie games',
                    2: 'Financially sustainable development',
                    3: 'Marketing'
                },
                description: {
                    paragraphs: {
                        1: 'Float Studios is a fictional Indie Game Studio that shows how to be a sustainable Indie Game Studio in the future. The Indie Game Industry is a tough market where it is difficult to stand out from the massive crowd, reach an audience and at the same time keeping the studio afloat. These are just some of the challenges future indie game studios will have to face. By opening the doors to Float Studios you will see how this indie game studio of the future deals with critical subjects like marketing, financing, time management and decision making in successful way.'
                    }
                },
                contributors: {
                    1: "Alexis Tubulekas",
                    2: "Adam Nyberg",
                    3: "Måns Åberg",
                    4: "Rebecka Rönnbäck"
                },
                styleObject: {
                    backgroundColor: '#353535',
                    backgroundImage: "url('../img/projects/float.png')"
                }
            },
        },
        modal: {
            id: 0,
            title: "",
            body: "",
            image: "",
            tags: {},
            contributors: {},
            showBack: false
        },
        numProjects: -1
    },
    created: function () {
        window.addEventListener('keyup', this.incrementModalProject);
        window.addEventListener('scroll', this.parallaxScroll);
        var size = 0, key;
        for (key in this.projects) {
            if (this.projects.hasOwnProperty(key)) size++;
        }
        this.numProjects = size;
    },
    methods: {
        flipModal: function(toSide = null){
            if(toSide == "front"){
                this.modal.showBack = false;
            } else if(toSide == "back"){
                this.modal.showBack = true
            } else{
                this.modal.showBack = !this.modal.showBack;
            }

            Vue.nextTick(this.setModalHeight);

        },
        toggleScrolling: function(){
            if(this.showModal){
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'auto');
            }
        },
        parallaxScroll: function(){
            var top = window.pageYOffset;

            var layers = document.getElementsByClassName("parallax");
            var layer, speed;
            for (var i = 0; i < layers.length; i++) {
                layer = layers[i];
                speed = layer.getAttribute('data-speed');
                var yPos = -(top * speed / 100);
                layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
            }
        },
        setModalContent: function (index) {
            var project = this.projects[index];

            this.modal.id = index;
            this.modal.title = project.name;
            this.modal.body = project.description.paragraphs;
            this.modal.image = {
                backgroundImage : project.styleObject.backgroundImage
            };
            this.modal.tags = project.tags;
            this.modal.contributors = project.contributors;

            this.flipModal("front");
        },

        setModalHeight: function(){
            // Set the modal container height
            var biggestHeight = 0;
            $(".flip-front, .flip-back").each(function(){
                // If this elements height is bigger than the biggestHeight
                if ($(this).height() > biggestHeight ) {
                    // Set the biggestHeight to this Height
                    biggestHeight = $(this).height();
                }
            });

            if(biggestHeight == 0){
                $('.modal-container').height("250px");
            } else{
                $('.modal-container').height(biggestHeight);
            }

        },

        closeModal: function(){
            this.showModal = false;
            this.toggleScrolling();
        },

        openModal: function (index) {
            // Set the content of the modal to the clicked project
            this.setModalContent(index);


            // Display the modal
            this.showModal = true;

            // Set the modal container height
            this.flipModal("front");

            this.toggleScrolling();
        },

        incrementModalProject: function(e){
            var currentId = parseInt(this.modal.id);
            var newId = 0;
            if (e.keyCode == 39){
                // right
                newId = currentId + 1;
                if(newId > this.numProjects){
                    newId = 1;
                }
                this.setModalContent(newId);
            } else if(e.keyCode == 37){
                // left
                newId = currentId - 1;
                if(newId < 1){
                    newId = this.numProjects;
                }
                this.setModalContent(newId);
            }
        }
    }
});

var Konami = function (callback) {
    var konami = {
        addEvent: function (obj, type, fn, ref_obj) {
            if (obj.addEventListener)
                obj.addEventListener(type, fn, false);
            else if (obj.attachEvent) {
                // IE
                obj["e" + type + fn] = fn;
                obj[type + fn] = function () {
                    obj["e" + type + fn](window.event, ref_obj);
                };
                obj.attachEvent("on" + type, obj[type + fn]);
            }
        },
        input: "",
        pattern: "38384040373937396665",
        load: function (link) {
            this.addEvent(document, "keydown", function (e, ref_obj) {
                if (ref_obj) konami = ref_obj; // IE
                konami.input += e ? e.keyCode : event.keyCode;
                if (konami.input.length > konami.pattern.length)
                    konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
                if (konami.input == konami.pattern) {
                    konami.code(link);
                    konami.input = "";
                    e.preventDefault();
                    return false;
                }
            }, this);
            this.iphone.load(link);
        },
        code: function (link) {
            window.location = link
        },
        iphone: {
            start_x: 0,
            start_y: 0,
            stop_x: 0,
            stop_y: 0,
            tap: false,
            capture: false,
            orig_keys: "",
            keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
            code: function (link) {
                konami.code(link);
            },
            load: function (link) {
                this.orig_keys = this.keys;
                konami.addEvent(document, "touchmove", function (e) {
                    if (e.touches.length == 1 && konami.iphone.capture == true) {
                        var touch = e.touches[0];
                        konami.iphone.stop_x = touch.pageX;
                        konami.iphone.stop_y = touch.pageY;
                        konami.iphone.tap = false;
                        konami.iphone.capture = false;
                        konami.iphone.check_direction();
                    }
                });
                konami.addEvent(document, "touchend", function (evt) {
                    if (konami.iphone.tap == true) konami.iphone.check_direction(link);
                }, false);
                konami.addEvent(document, "touchstart", function (evt) {
                    konami.iphone.start_x = evt.changedTouches[0].pageX;
                    konami.iphone.start_y = evt.changedTouches[0].pageY;
                    konami.iphone.tap = true;
                    konami.iphone.capture = true;
                });
            },
            check_direction: function (link) {
                x_magnitude = Math.abs(this.start_x - this.stop_x);
                y_magnitude = Math.abs(this.start_y - this.stop_y);
                x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
                y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
                result = (x_magnitude > y_magnitude) ? x : y;
                result = (this.tap == true) ? "TAP" : result;

                if (result == this.keys[0]) this.keys = this.keys.slice(1, this.keys.length);
                if (this.keys.length == 0) {
                    this.keys = this.orig_keys;
                    this.code(link);
                }
            }
        }
    };

    typeof callback === "string" && konami.load(callback);
    if (typeof callback === "function") {
        konami.code = callback;
        konami.load();
    }

    return konami;
};

var easter_egg = new Konami('https://www.youtube.com/watch?v=dQw4w9WgXcQ');