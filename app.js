var app = angular.module("portfolioApp", ["ngRoute", "ngAnimate"]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider
        .when("/",{
            templateUrl:"views/home.html"
        })
        .when("/about",{
            templateUrl:"views/about.html",
            controller:"aboutController"
        })
        .when("/skills",{
            templateUrl:"views/skills.html",
            controller:"skillController"
        })
        .when("/projects",{
            templateUrl:"views/projects.html",
            controller:"projectController"
        })
        .when("/contact",{
            templateUrl:"views/contact.html",
            controller:"contactController"
        })
        .when("/resume",{
            templateUrl:"views/resume.html",
            controller:"resumeController"
        })
        .otherwise({
            redirectTo:"/"
        });
}]);

app.controller("skillController", ["$scope", function($scope){
    $scope.skillGroups = [
        {
            title: "Languages & Frameworks",
            skills: [
                {name:"Python",level:"85%",icon:"https://www.vectorlogo.zone/logos/python/python-horizontal.svg"},
                {name:"C Programming",level:"90%",icon:"assets/icons/c-programming.svg"},
                {name:"C++",level:"85%",icon:"assets/icons/cpp.svg"},
                {name:"AngularJS",level:"75%",icon:"assets/icons/angularjs.svg"}
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                {name:"Git",level:"75%",icon:"https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"},
                {name:"AWS",level:"60%",icon:"https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg"},
                {name:"Docker",level:"55%",icon:"https://www.vectorlogo.zone/logos/docker/docker-ar21.svg"}
            ]
        },
        {
            title: "Areas of Interest",
            skills: [
                {name:"Cyber Security",level:"80%",icon:"assets/icons/owasp.svg"},
                {name:"Computer Vision",level:"70%",icon:"https://www.vectorlogo.zone/logos/opencv/opencv-ar21.svg"},
                {name:"NLP",level:"65%",icon:"assets/icons/nltk.svg"}
            ]
        }
    ];
}]);

app.controller("projectController", ["$scope", function($scope){
    $scope.categories = [
        { label: "All", value: "All" },
        { label: "Web", value: "web" },
        { label: "ML", value: "ml" },
        { label: "Security", value: "security" }
    ];

    $scope.selectedCategory = "All";

    $scope.setCategory = function(category) {
        $scope.selectedCategory = category;
    };

    $scope.projectCategoryFilter = function(project) {
        if ($scope.selectedCategory === "All") return true;
        return project.category === $scope.selectedCategory;
    };

    $scope.projects=[
        {
            name:"Phishing-Attack-Domain-Detection",
            tech:"Python / ML",
            desc:"Identifying Malicious Phishing URLs through Machine Learning.",
            image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&crop=center",
            github:"https://github.com/MrParth-the-coder/Phishing-Attack-Domain-Detection",
            category:"security"
        },
        {
            name:"Mackchanger2025",
            tech:"Shell / Security",
            desc:"Script used to change MAC address for network anonymity.",
            image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop&crop=center",
            github:"https://github.com/MrParth-the-coder/Mackchanger2025",
            category:"security"
        },
        {
            name:"Line Following Robot",
            tech:"Arduino / Robotics",
            desc:"Autonomous robot that follows a path using sensors.",
            image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&crop=center",
            github:"https://github.com/MrParth-the-coder",
            category:"web"
        },
        {
            name:"Cat & Dog Classifier",
            tech:"Python / ML",
            desc:"Machine learning solution to classify images of cats and dogs.",
            image:"https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&h=250&fit=crop&crop=center",
            github:"https://github.com/MrParth-the-coder/cat_dog_classifier_solution",
            category:"ml"
        },
        {
            name:"Rock Paper Scissors",
            tech:"Python",
            desc:"Classic Rock Paper Scissors game implementation.",
            image:"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center",
            github:"https://github.com/MrParth-the-coder/rock-paper-scissors",
            category:"web"
        },
        {
            name:"Twitter Analysis",
            tech:"Python / NLP",
            desc:"Analyzed tweet data to derive sentiment and trending topics.",
            image:"https://images.unsplash.com/photo-1522046310824-b0409fe69650?w=400&h=250&fit=crop&crop=center",
            github:"https://github.com/MrParth-the-coder/twitter-analysis",
            demo:"https://parthgondaliya.netlify.app/projects/twitteranalysis",
            category:"ml"
        }
    ];
}]);

app.controller("aboutController", ["$scope", function($scope){
    $scope.profile = {
        name: "Parth Gondaliya",
        title: "Cybersecurity Analyst & B.Tech CSE Student",
        summary: "Cybersecurity • Robotics • Embedded Systems | Building, breaking, and securing technology.",
        birthday: "05 Sep 2005",
        phone: "+91 78630 98686",
        city: "Raydi",
        email: "mr.parthgondaliya@gmail.com",
        links: [
            { label: "LinkedIn", url: "https://www.linkedin.com/in/mrparth-gondaliya/" },
            { label: "GitHub", url: "https://github.com/MrParth-the-coder" }
        ],
        interests: [
            "Cyber Security",
            "Software Development",
            "Computer Vision",
            "Natural Language Processing",
            "Software Engineering",
            "Visualization",
            "Algorithms",
            "Image Processing"
        ],
        education: [
            {
                degree: "B.Tech in Computer Science & Engineering",
                period: "June 2023 - Present",
                coursework: ["Python", "Cyber Security", "Foundation Of Algorithms"]
            },
            {
                degree: "High School (9th - 12th)",
                period: "July 2019 - March 2023",
                coursework: ["Basics of Computer Systems", "Mathematics", "Science"]
            }
        ],
        certifications: [
            { title: "Introduction to Information Security", url: "https://drive.google.com/file/d/1jeByWNsw8erSxp8zx0qMjP2XERCNo_j5/view?usp=drive_link", icon: "assets/icons/certificate.svg" },
            { title: "Types of Cyber Security", url: "https://drive.google.com/file/d/1gRBkhBGYk697kkCSBiV1i8NBn_VnNlhn/view?usp=sharing", icon: "assets/icons/certificate.svg" },
            { title: "Network Security", url: "https://drive.google.com/file/d/1Gt-tZf1JXZKWeT7mdkWB8bO2AJlc03II/view?usp=sharing", icon: "assets/icons/certificate.svg" },
            { title: "Encryption Basics", url: "https://drive.google.com/file/d/1pIM1_DO_bIRntlw_YOiHd_1a2GiuwaQg/view?usp=sharing", icon: "assets/icons/certificate.svg" },
            { title: "Cyber Security: Exploration of Information Security", url: "https://drive.google.com/file/d/1p8T3dLrY2lSI8Rjs6SSTApJPnddNJD_U/view?usp=sharing", icon: "assets/icons/certificate.svg" },
            { title: "C for Beginners", url: "https://drive.google.com/file/d/1GoIQ5adv9SArH-62okjbKuJASmw7PGAf/view?usp=sharing", icon: "assets/icons/certificate.svg" }
        ],
        experience: [
            {
                company: "Arizona State University",
                role: "Software Engineer",
                period: "January 2021 - Present",
                bullets: [
                    "Managed large-scale deployment of JupyterHub with Nbgrader and webwork software, supporting ~5500 students.",
                    "Configured and maintained server-side web applications for the statistics department.",
                    "Automated Linux server tasks (user accounts, maintenance) using shell scripts."
                ]
            },
            {
                company: "Augmenify Infotech Pvt. Ltd.",
                role: "Backend Developer",
                period: "August 2020 - November 2020",
                bullets: [
                    "Developed serverless web application APIs using Flask, JWT authentication, AWS Lambda, and DynamoDB.",
                    "Implemented customer account management and scheduling features for hotel industry clients."
                ]
            }
        ]
    };

    $scope.getInterestIcon = function(interest) {
        const icons = {
            "Cyber Security": "🔒",
            "Software Development": "💻",
            "Computer Vision": "👁️",
            "Natural Language Processing": "🗣️",
            "Software Engineering": "⚙️",
            "Visualization": "📊",
            "Algorithms": "🧮",
            "Image Processing": "🖼️"
        };
        return icons[interest] || "⭐";
    };
}]);

app.controller("contactController", ["$scope", function($scope){
    $scope.contactInfo = {
        address: "At. Raydi, 315 - Plote Vistar, Pin - 365550",
        email: "gondaliyaparth2005@gmail.com",
        phone: "+91-7863098686",
        links: [
            {icon: "LinkedIn", url: "https://www.linkedin.com/in/mrparth-gondaliya/"},
            {icon: "GitHub", url: "https://github.com/MrParth-the-coder"},
            {icon: "Google", url: "https://www.google.com/"}
        ]
    };

    $scope.formData = {
        name: "",
        email: "",
        message: ""
    };

    $scope.send = function(){
        if ($scope.formData.name && $scope.formData.email && $scope.formData.message) {
            alert("Message Sent Successfully!\n\nName: " + $scope.formData.name +
                  "\nEmail: " + $scope.formData.email +
                  "\nMessage: " + $scope.formData.message);

            // Reset form
            $scope.formData = {
                name: "",
                email: "",
                message: ""
            };
        } else {
            alert("Please fill in all fields.");
        }
    };
}]);

app.controller("resumeController", ["$scope", function($scope){
    $scope.resume = {
        title: "Resume & Links",
        resumePdf: "assets/resume.pdf",
        resumeGoogle: "https://drive.google.com/file/d/1hKwCyD3d2-gOXbJyh9TsYRTVWGaovIlY/view",
        links: [
            {label: "GitHub Profile", url: "https://github.com/MrParth-the-coder", icon: "https://www.vectorlogo.zone/logos/github/github-horizontal.svg"},
            {label: "Portfolio (Netlify)", url: "https://parthgondaliya.netlify.app/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg"}
        ],
        tools: [
            {name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"},
            {name: "AWS", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg"},
            {name: "Docker", icon: "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg"},
            {name: "Jupyter", icon: "https://www.vectorlogo.zone/logos/jupyter/jupyter-ar21.svg"},
            {name: "VS Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"},
            {name: "Linux", icon: "https://www.vectorlogo.zone/logos/linux/linux-ar21.svg"}
        ]
    };
}]);
