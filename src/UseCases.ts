export interface Testimonial {
    memo?: string;
    rating: number;
    person: {
        name: string;
        location: string;
    };
}

export interface Product {
    name: string;
    identifier: string;
    summary: string;
    longerDescription?: string | string[];
    price?: number;
    image?: string;
    testimonials?: Testimonial[];
    carousel?: {
        url: string,
        imageAlt: string,
        text: {
            title: string,
            caption?: string,
        },
    };
}

export interface UseCase {
    area: string;
    color: string;
    identifier: string;
    title?: string;
    description: string | string[];
    longerDescription?: string | string[];
    products: Product[];
    image?: string;
    testimonials?: Testimonial[];
}

const uses: UseCase[] = [
    {
        area: 'Personal Life',
        color: 'success',
        identifier: 'personal',
        title: 'Explore life in a new way — your way. ',
        description: 'See how our products can be used in your personal life',
        longerDescription: [
            'As our society continues to evolve with the changing times and needs, our crutch on technology continues to get bigger. However, with the correct procedure, we can cultivate the benefits within a matter of days.',
            `Our artificial intelligence technologies are constantly adapting to our consumer's needs to create the most positive experience.
            A subset of our technologies focus primarily on aiding in personal life and improving quality of life.
            These appliances are made with ease-of-access in mind, ensuring that interaction with them will always be a breeze - something that is expected in many households.`,
            `Because our technologies are powered by I.B.M.'s Watson AI, we are confident that our products will be able to perform true smart-home automation, paying attention to when the house is empty or where you are in the house and making accomodations for that.`,
            `Ultimately, the products are designed to serve you. Our products specialize in SmartThings integrations and intelligently adjusting their statuses.`,
        ],
        testimonials: [
            {
                person: {
                    name: 'Jamie Bishop',
                    location: 'Tampa, FL',
                },
                rating: 4,
                memo: 'I use Dayna for all of my smart-home automation, and I couldn\'t live without her!',
            },
            {
                person: {
                    name: 'Riley McKay',
                    location: 'Tampa, FL',
                },
                rating: 5,
                memo: 'Without Dayna I don\'t know what I would do. I have so many errands to run and things to do, and Dayna is really useful in keeping track of them and even doing them for me!',
            },
        ],
        image: '/assets/relaxed.jpeg',
        products: [{
            name: 'Dayna',
            identifier: 'sample-product',
            summary: 'As the newest model of our A.I. line, Dayna is equipped with the latest technology to help you, our most valued customer, with anything that deals with data.',
            longerDescription: [
                'With Dayna, the saying "get more bang for your buck," becomes something that can soon easily describe your life. Starting at only $59.99, Dayna is our most cost-efficient option for offices, parents, and everyone in between. With the basic package, Dayna can help plan and manage upcoming events, offer assistance in a variety of situations, and look up information. For an extra $50, Dayna can be upgraded to our premium package that when connected to any Bluetooth car, can actually drive your car. In addition, Dayna will now be able to watch over any minors.',
                'The benefits of Dayna are limitless; need someone to take out the trash? Dayna\'s on it. Is the deadline to pay your utility bills getting closer and closer, all happening without your notice? Dayna can take notice of your patterns and organize your mail to figure out when and how much you need to pay this month.',
                'Now, even though Dayna may not be a human, Dayna does have the similiar needs to a human. While humans usuaully require breakfast, lunch, and dinner, Dayna only needs to be recharged with "robot food" a.k.a electricity every four months.',
            ],
            price: 59.99,
            carousel: {
                url: 'SoftBank_pepper.JPG',
                imageAlt: 'Meet Dayna',
                text: {
                    title: 'Meet Dayna',
                    caption: 'Dayna can help us move from personal assistants to one public system that can serve mutliple people without any issue.',
                },
            },
            image: '/assets/Roboy_270213_1.jpg',
        }, {
            name: 'Activate',
            identifier: 'sample-product-secondary',
            summary: 'Land, air, sea, and beyond.',
            longerDescription: 'Designed to accompany you across all terrain and situations, Activate is the hardiest version we have out on the market at the moment. Currently being used and tested by the U.S. Armed Forces, Activate combines the usual drone into the body frame of an ATV. While the average consumer may not necessarily need this robot for combat or the collection of intelligence, Activate is perfect for the thrill seekers world wide and the adventurer within us all.',
            price: 895.00,
            carousel: {
                url: 'Roboy_270213_1.JPG',
                imageAlt: 'Activate',
                text: {
                    title: 'Activate',
                    caption: 'Activate is a highly intelligent robot suitable for both commercial and personal use',
                },
            },
        }, {
            name: 'Ezra',
            identifier: 'sample-product-tertiary',
            summary: 'Here to help, here to inspire.',
            longerDescription: 'This is no doubt, our cheapest robot out there. Taking inspiration from the relationship between Helen Keller and Anne Sullivan, Ezra can act as both companion and friend, creating a bond that will set the standard for the future to come.',
            price: 25.00,
            carousel: {
                url: 'ASIMO_4.28.11.JPG',
                imageAlt: 'Hello, my name is Ezra',
                text: {
                    title: 'Hello, my name is Ezra',
                    caption: 'Ezra was designed specifically to help, whether that may be reminding you to take your medicine, to help comfort you after a panic attack, or to even just turn on your lights.',
                },
            },
        }],
    },
    {
        area: 'Commerce',
        color: 'secondary',
        identifier: 'commercial',
        image: '/assets/commerce.jpeg',
        title: 'Learn how businesses can use artificial intelligence to grow and expand.',
        description: 'Artificial intelligence is often seen as something that could exist in the future, yet at the same time, businesses have already grown to house artificial intelligence into their workplace. From virtual assistantce to data analysis, artificial intelligence is allowing us to step into a new, technologically-advanced world.',
        longerDescription: [
            'Many businesses have trusted our products to manage various operations within their workflow. Our commerce-oriented products are designed to intelligently monitor inventory levels and re-order them when they reach a critical level, automatically distribute payrolls, and much, much more.',
            'Our products are designed to think like a business-owner, tracking purchase records and ensuring shipments make it to their destinations. These products do the hard work so you don\'t have to.',
        ],
        testimonials: [
            {
                person: {
                    name: 'John McDermott',
                    location: 'Pittsburg, PA',
                },
                rating: 5,
                memo: 'I absolutely love the commerce suite I rented from Running Robot! It manages our payment processing and reliably detects fraudulent purchases.',
            },
            {
                person: {
                    name: 'Alex Foster',
                    location: 'Kelly Frost',
                },
                rating: 4,
                memo: 'I own and operate a small business and the commerce suite really alleviates a lot of stresses created by my job. It tracks inventory and shows my supply in real-time, ordering more inventory when I get low.',
            },
        ],
        products: [{
            name: 'IBM Jackson',
            identifier: 'sample-product',
            summary: 'By working in partnership with IBM, we have been able to create a new system which will allow companies to take stock and inventory, all without the hassle associated with working in retail. ',
            longerDescription: [
                'The opportunities are endless — retail, advertising, customer service, anything that your mind can imagine, Jackson can do. Despite the stereotypes, America is actually one of the hardest working countries in the world, and what\'s so special about Jackosn is that he has been able to apply this characteristic into his work; he has the ability to make the quick decisions of a human employee all wihtout the eventual fatigue all humans feel.',
                'Even though some say that this takes jobs away from hard-working citizens, the integration of artifical intelligence creates a communalistic back-up system between the workers and robots. As the human employees go through their work, our programs can check the, for example, math on a trajectory equation; and as robots make decisions, humans are right there, alongside them, checking it\'s validity and ethics.',
                'Overall, the only problem which could potentially arise is the fact that standard updates are required and that with the usage of artificial intelligence in the workplace, comes the price of taking responsibility of the program\'s decisions and therefore code. If there is a fault in the code which leads to an accident, per say a car crash, the company which owns the rights to the code would then have to be held liable for the damage.',
            ],
            price: 769.00,
            image: '/assets/commerce_2.jpeg',
        }],
    },
    {
        area: 'Education',
        color: 'danger',
        identifier: 'educational',
        title: 'See how educational instructors are using our technology to improve the classroom',
        image: '/assets/education.jpeg',
        description: [
            'Everything is interconnected. Cold and hot, black and white, complete opposites but at the same time, partners. What students learn in school, they carry over with them into the workplace.', 'If students grow accustomed to school without the usage of technology they become unfamiliar with it, and as this becomes more of a real problem the question remains, what can you do?',
            'The answer — artificial intelligence.',
        ],
        longerDescription: [
            'Our artificial intelligence has been specialized into a Learning Management Solution which offers powerful and rich experiences to its users. It creates a very clean, minimal and easy to read graph of the students grades and performance, showing the student what he/she needs to do to improve their grades.',
            'Moreover, our LMS offers a very robust and flexible digital learning space where students can interactively work with their lessons. Teachers have found that creating lessons is a breeze, and the results of using it with their students has been astonishing.',
        ],
        testimonials: [
            {
                person: {
                    name: 'Natasha Roberts',
                    location: 'Alberquerque, NM',
                },
                rating: 5,
                memo: 'The Learning Management Solution offered by Running Robot is incomparable to any other LMS that we have tried. I feel it has made a positive impact on the school environment, as students are given a much better and understandable overview of their grades and assignments, and, more importantly, are offered very rich and interactive digital learning environments.',
            },
            {
                person: {
                    name: 'Walter White',
                    location: 'New York City, NY',
                },
                rating: 5,
                memo: 'Being in such a large school district, finding a good and scalable Learning Management Solution was tough. When we came across Running Robot, we trialed it with a small subset of our students. It received great reception. We have rolled it out to the entire school-district, and it has been praised by students, teachers and parents alike. Students and teachers can work together in very streamlined digital learning environments, enhancing their overall education.',
            },
        ],
        products: [{
            name: 'iProfessor',
            identifier: 'sample-product',
            summary: 'The use of artificial intelligence in schools allows students to gain a better undertanding of technology skills that will help them in the real world, something that can ultimately improve our society and economy.',
            longerDescription: 'By allowing articial intelligence to work in tandem with teachers, students can get an education not like any other: a better relationshis between teacher and student, personalized tutoring and interactive lessons. While this may seem controversial, this allows students to gain a sense of indepedndence in their education and learn from their mistakes; virtual schools are already gaining poplarity and they allow for students to take a more specific direction in their education.',
            price: 42.00,
            image: '/assets/education_2.jpeg',
        }],
    },
    {
        area: 'Recreation',
        color: 'info',
        identifier: 'recreational',
        title: 'Fun + AI = The New Future',
        image: '/assets/recreation.jpeg',
        description: '20 years ago, you could be able to find at most a remte-controlled helicoptor or car, but now we have drones, we have robot dogs, and we have the future.',
        longerDescription: [
            '>>WIP\nOur technologies have been applied in personal life, too.',
        ],
        testimonials: [
            {
                person: {
                    name: 'Steven Crawford',
                    location: 'Trenton, NJ',
                },
                rating: 4,
                memo: '',
            },
            {
                person: {
                    name: 'Alondra Schmidt',
                    location: 'St. Peterspurg, FL',
                },
                rating: 5,
                memo: '',
            },
        ],
        products: [{
            name: 'BullsEye',
            identifier: 'sample-product',
            summary: 'Nowadays, drones can be seen acting as camera operators for football games, but artificial intelligence can act as something more for recreational purposes. From offering seat and concession stand recommendations at games, to tracking balls for tennis or golf games, artifical intelligence can do a lot more than realized.',
            longerDescription: [
                'Recreation can be defined as a process done in one\'s personal enjoyment when they are not working, yet at the meantime, the whole idea of fun as a potential field in artificial intelligence has been pushed aside; artificial intelligence is too "mature" for just fun and games. Well BullsI is here to wipe away any second doubts.',
                'BullsI is our first ever series of drones, each catering specifically to a certain task or focus. While BullsI 2.0 is meant as a partner in a various of games, both mental and physically challenging (such as Freeze Tag or chess), BullsI 3.0 can act as a mentor in specific sports. Already, the NFL has started using our robot to help fine tune their player\'s stats and performance; by using a variety of analytics and tracking systems, the team was able to create a program which takes apart an athlete\'s movements and recommend certain drills or excersices to do.',
                'Finally, we have BullsI Kid. This system works one-on-one with children, learning their behavior and social patterns to teach the child songs and hand games to develop the child\'s mind.',
            ],
            price: 622.00,
            image: '/assets/recreation_2.jpeg',
        }],
    },
    {
        area: 'Research',
        color: 'dark',
        identifier: 'research',
        image: '/assets/research.jpeg',
        description: 'Everyone knows the famous AI system HAL 9000 from the movie 2001 Space Odyssey, and the evil Terminator from the Terminator franchise, but despite their immense popularity, these two are not what a true robot can be.',
        longerDescription: [
            'Artificial intelligences specializing in research have been our best-selling products due to their very nature. These products can be applied to so many different solutions, some being as complex as creating other artificial-intelligence systems.',
            'Our research products are not limited to digital research. Arnold, one of our most notable products, can be mobilized in laboratory environments to facilitate research projects and automate certain tasks.',
        ],
        testimonials: [
            {
                person: {
                    name: 'Steven Peters',
                    location: 'Tampa, FL',
                },
                rating: 4,
                memo: 'My research company uses Arnold in our laboratories to speed up certain projects, especially projects that require a lot of abstract thinking. Arnold works well under pressure and can solve some of the most complex problems that we have run into.',
            },
            {
                person: {
                    name: 'Ayden Panhuyzen',
                    location: 'Austin, TX',
                },
                rating: 4,
                memo: 'We at Dynastic Development use Arnold to create constantly-changing artificial intelligence that monitors our web APIs for abusive behaviors. We are able to quickly adjust behaviors, with a full propogation happening within minutes. Arnold is very quick to think and has deployed artifical intelligence solutions that we have never even thought of.',
            },
        ],
        products: [{
            name: 'Arnold',
            identifier: 'sample-product',
            summary: 'Taking inspiration from the former-bodybuilder who gained fame as the infamous AI, Arnold allows for major issues around the world and future to be solved.',
            longerDescription: [
                'Here\'s something to think about — how do you build functional AI with AI?',
                'Now while that may seem redundant, this is becoming more of the norm in multiple research facilities around the world. By creating one machine which has a set of tasks and abilities, it can then pass on its knowledge to clones, allowing for more to be produced and therefore expand the area of research.',
                'Take meterology for example, with specific methods, meterologists can analyze data and figure out when a storm may hit and how for how long. With AI though, researchers can focus on making the program, then when the time comes, they can run it and have the robot personally analyze the collected data.',
                'As is in business, AI can simplify the overall process of getting the job done.',
            ],
            price: 517.00,
            image: '/assets/research_2.jpeg',
        }],
    },
];

export default uses;
