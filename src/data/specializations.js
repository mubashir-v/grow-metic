import {
    Code,
    Database,
    BarChart,
    BrainCircuit,
    Bot,
    Shield,
    Server,
    Cloud,
    Cpu,
    Layout,
    Globe,
    Terminal,
    Infinity,
    Layers,
    Sparkles,
    Briefcase,
    Settings,
    PieChart,
    Map,
    Activity,
    Box,
    GitBranch,
    Lock,
    Smartphone,
    Monitor
} from 'lucide-react';



export const specializations = [

    {
        id: 'data-eng',
        title: 'Data Engineering',
        shortTitle: 'Data Engineering',
        category: 'Cloud & Data',
        icon: Cloud,
        recommended: true,
        shortDesc: 'Architect an "End-to-End Retail Analytics Pipeline". Move data from raw sources to business insights on cloud infrastructure.',
        modules: [
            {
                title: 'Programming Fundamentals',
                description: 'Build the logic. Master data structures and algorithms (DSA) to write efficient code for processing massive datasets.',
                topics: ['Data Structures', 'Algorithms', 'Complexity Analysis', 'Problem Solving'],
                icon: Code
            },
            {
                title: 'Python for Data Engineering',
                description: 'Script the flow. Learn Python automation, file handling, and interaction with APIs and databases for engineering tasks.',
                topics: ['Python Scripting', 'API Integration', 'File Processing', 'Database Connectivity'],
                icon: Terminal
            },
            {
                title: 'Web Data Sources',
                description: 'Know the source. Understand how web applications generate data and how to capture it via logs, APIs, and web scraping.',
                topics: ['HTTP Protocols', 'Web APIs', 'Log Parsing', 'Data Formatting (JSON/XML)'],
                icon: Layout
            },
            {
                title: 'Advanced Databases (SQL & NoSQL)',
                description: 'Store the truth. Deep dive into designing complex schemas with PostgreSQL and handling unstructured data with MongoDB.',
                topics: ['Advanced SQL Queries', 'Normalization', 'NoSQL Modeling', 'Database Tuning'],
                icon: Database
            },
            {
                title: 'Data Pipeline Architecture',
                description: 'Design the pipes. Learn the core concepts of ETL (Extract, Transform, Load) and how to move data reliably between systems.',
                topics: ['ETL vs ELT', 'Batch vs Streaming', 'Data Ingestion', 'Workflow Orchestration'],
                icon: Layers
            },
            {
                title: 'Cloud Infrastructure',
                description: 'Move to the cloud. Deploy your pipelines on robust cloud infrastructure like AWS, utilizing scalable storage and compute.',
                topics: ['Cloud Storage (S3)', 'Serverless Computing', 'IAM Security', 'Cost Management'],
                icon: Cloud
            },
            {
                title: 'Big Data Ecosystem',
                description: 'Scale it up. Process terabytes of data using distributed computing frameworks like Apache Spark and Hadoop.',
                topics: ['Distributed Computing', 'Apache Spark', 'Hadoop/HDFS', 'Cluster Management'],
                icon: Server
            },
            {
                title: 'Data Cleaning & Quality',
                description: 'Refine the fuel. Implement transformation logic to clean, validate, and standardize raw data for analysis.',
                topics: ['Data Wrangling', 'Schema Validation', 'Quality Checks', 'Error Handling'],
                icon: Settings
            },
            {
                title: 'Data Presentation & Warehousing',
                description: 'Store for value. Load processed data into Data Warehouses optimized for fast retrieval and business intelligence.',
                topics: ['Data Warehousing', 'Star Schema', 'Dimensional Modeling', 'OLAP'],
                icon: PieChart
            },
            {
                title: 'Analysis & Insights',
                description: 'Understand the end goal. Learn basic data analysis to understand "what next" after the data is processed.',
                topics: ['SQL Analytics', 'Basic Visualizations', 'Business Reporting', 'Data Exploration'],
                icon: BarChart
            },
            {
                title: 'GenAI in Data Engineering',
                description: 'Modernize the stack. Leverage Generative AI to automate code generation, documentation, and build intelligent data agents.',
                topics: ['AI-Assisted Coding', 'Automated Documentation', 'Intelligent Agents', 'Future of DE'],
                icon: Sparkles
            }
        ]
    },
    {
        id: 'data-analysis',
        title: 'Data Analysis',
        shortTitle: 'Data Analysis',
        category: 'Data Science',
        icon: BarChart,
        recommended: true,
        shortDesc: 'Create a "Sales Performance Dashboard" to drive executive decisions.',
        modules: [
            {
                title: 'Programming Fundamentals & Data Structures',
                description: 'Build a solid foundation. Master variables, loops, and functions while learning to solve logical problems using core data structures.',
                topics: ['Variables & Operators', 'Control Statements', 'Stacks & Queues', 'Searching & Sorting'],
                icon: Code
            },
            {
                title: 'Web Technologies & Interactive Applications',
                description: 'The interface matters. Learn HTML, CSS, and JavaScript to build responsive web applications and interactive data dashboards.',
                topics: ['HTML & CSS', 'JavaScript Basics', 'DOM Manipulation', 'Responsive Dashboard'],
                icon: Layout
            },
            {
                title: 'Advanced SQL & Database Design',
                description: 'Speak to the data. Master complex SQL queries, window functions, and database design to extract precise insights.',
                topics: ['Advanced SQL', 'Relational Schemas', 'Query Performance', 'NoSQL Basics'],
                icon: Database
            },
            {
                title: 'Data Pipeline & Engineering',
                description: 'Move the data. Learn ETL workflows, data collection strategies, and how to automate data processing pipelines using Python.',
                topics: ['ETL Workflows', 'Data Transformation', 'Pipeline Automation', 'Data Collection'],
                icon: Layers
            },
            {
                title: 'Cloud Computing for Data & AI',
                description: 'Scale to the cloud. Understand cloud service models and core AWS services for storage, processing, and security.',
                topics: ['AWS Core Services', 'Cloud Storage', 'Processing on Cloud', 'Cloud Security'],
                icon: Cloud
            },
            {
                title: 'Big Data Technologies',
                description: 'Handle massive scale. Explore the ecosystem of Hadoop, Spark, and Databricks for distributed big data processing.',
                topics: ['Hadoop Ecosystem', 'Apache Spark', 'PySpark', 'Databricks'],
                icon: Database
            },
            {
                title: 'Python Programming',
                description: 'The language of data. Master Python syntax, functions, modules, and Object-Oriented Programming for automation and development.',
                topics: ['Python Syntax', 'OOP Concepts', 'File Handling', 'Exception Handling'],
                icon: Terminal
            },
            {
                title: 'Statistics for Data Science',
                description: 'Understand the numbers. Learn measures of central tendency, dispersion, probability distributions, and hypothesis testing.',
                topics: ['Mean/Median/Mode', 'Standard Deviation', 'Probability', 'Hypothesis Testing'],
                icon: BarChart
            },
            {
                title: 'Data Analysis & Visualization',
                description: 'Tell a story with data. Clean and explore datasets using Excel and Tableau to create meaningful reports and visualizations.',
                topics: ['Data Wrangling', 'EDA Lifecycle', 'Excel Analysis', 'Tableau Dashboards'],
                icon: PieChart
            },
            {
                title: 'Python for Data Science',
                description: 'Data toolkit. Leverage powerful libraries like NumPy and Pandas for numerical computing and complex data manipulation.',
                topics: ['NumPy Arrays', 'Pandas DataFrames', 'Data Manipulation', 'Visual Libraries'],
                icon: Terminal
            },
            {
                title: 'Machine Learning',
                description: 'Predict outcomes. Train supervised and unsupervised models including regression, classification, and decision trees.',
                topics: ['Supervised Learning', 'Feature Engineering', 'Regression Models', 'Model Evaluation'],
                icon: BrainCircuit
            },
            {
                title: 'Deep Learning',
                description: 'Mimic the brain. Build and train neural networks using TensorFlow and Keras for complex pattern recognition.',
                topics: ['Neural Networks', 'CNN & RNN', 'TensorFlow', 'Keras'],
                icon: BrainCircuit
            },
            {
                title: 'Generative AI',
                description: 'Create new content. Explore LLMs, prompt engineering, and build AI-powered assistants and text generation tools.',
                topics: ['Large Language Models', 'Prompt Engineering', 'AI Chatbots', 'Ethical AI'],
                icon: Sparkles
            }
        ]
    },
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        shortTitle: 'AI & ML',
        category: 'Artificial Intelligence',
        icon: BrainCircuit,
        recommended: true,
        shortDesc: 'Develop a "Smart Customer Recommendation Engine" to boost engagement.',
        modules: [
            {
                title: 'Programming Fundamentals',
                description: 'Build the logic. Master data structures and algorithms (DSA) to write efficient code for complex AI models.',
                topics: ['Data Structures', 'Algorithms', 'Optimization Logic', 'Problem Solving'],
                icon: Code
            },
            {
                title: 'Python for AI Development',
                description: 'The language of AI. Master Python specifically for AI workloads, including automation, libraries, and environment management.',
                topics: ['Advanced Python', 'NumPy & Pandas', 'Virtual Envs', 'Package Management'],
                icon: Terminal
            },
            {
                title: 'App Intelligence (Web & DB)',
                description: 'The context layer. Understand Web Architectures and Database designs (SQL/NoSQL) to identify where AI adds value.',
                topics: ['Web Architectures', 'DB Schema Design', 'Business Logic', 'AI Injection Points'],
                icon: Layout
            },
            {
                title: 'Data Pipelines for AI',
                description: 'Feed the beast. Learn how data flows from source to model, ensuring high-quality input for training.',
                topics: ['Data Ingestion', 'Feature Stores', 'Automated Pipelines', 'Data Versioning'],
                icon: Layers
            },
            {
                title: 'Big Data & Scalability',
                description: 'Scale the training. Process massive datasets needed for modern AI using distributed computing tools.',
                topics: ['Spark for ML', 'Distributed Training', 'Cloud Data', 'Scalability Patterns'],
                icon: Database
            },
            {
                title: 'Data Analysis & Prep',
                description: 'Know your data. Perform Exploratory Data Analysis (EDA) to understand distributions and clean noise before training.',
                topics: ['Exploratory Analysis', 'Visualization', 'Data Cleaning', 'Feature Selection'],
                icon: BarChart
            },
            {
                title: 'Machine Learning Core',
                description: 'The foundation. Master supervised and unsupervised learning algorithms to solve prediction and classification problems.',
                topics: ['Regression/Classification', 'Scikit-Learn', 'Model Evaluation', 'Ensemble Methods'],
                icon: BrainCircuit
            },
            {
                title: 'Deep Learning & Vision',
                description: 'See the world. Build Neural Networks using TensorFlow and PyTorch. Master Computer Vision with YOLO for object detection.',
                topics: ['Neural Networks', 'TensorFlow/Keras', 'CNNs', 'YOLO Object Detection'],
                icon: Activity
            },
            {
                title: 'NLP & Transformers',
                description: 'Understand language. Process text data using RNNs and modern Transformer architectures to build chatbots and translators.',
                topics: ['Text Processing', 'RNNs & LSTMs', 'Transformers', 'Sentiment Analysis'],
                icon: Terminal
            },
            {
                title: 'Generative AI & LLMs',
                description: 'Create the future. Master Large Language Models, prompt engineering, and build intelligent AI agents.',
                topics: ['LLMs (GPT/Llama)', 'Prompt Engineering', 'LangChain', 'AI Agents'],
                icon: Sparkles
            }
        ]
    },
    {
        id: 'robotics',
        title: 'Robotics & AI',
        shortTitle: 'Robotics',
        category: 'Hardware & AI',
        icon: Bot,
        shortDesc: 'Engineer an "Autonomous Warehouse Delivery Bot" to optimize logistics.',
        modules: [
            {
                title: 'Programming Fundamentals',
                description: 'Build logic. Master data structures and algorithms (DSA) to write efficient control logic for physical machines.',
                topics: ['C++ Basics', 'Memory Management', 'Pointers & References', 'Hardware Logic'],
                icon: Code
            },
            {
                title: 'Languages of Robotics',
                description: 'Speak the language. Master C++ for low-level hardware control and Python for high-level AI and scripting.',
                topics: ['Advanced C++', 'Python for Robotics', 'OOP Patterns', 'Hardware Abstraction'],
                icon: Terminal
            },
            {
                title: 'Embedded Systems & IoT',
                description: 'The bridge. Learn how code talks to atoms. Interface microcontrollers with sensors and motors to sense and move.',
                topics: ['Microcontrollers (ESP32)', 'GPIO & Interrupts', 'Sensor Protocols', 'Motor Control'],
                icon: Cpu
            },
            {
                title: 'The Automation Business',
                description: 'The gap. Understand Warehouse Management Systems (WMS) and how data is stored (SQL) to identify automation needs.',
                topics: ['WMS Logic', 'SQL for Logistics', 'Automation ROI', 'Process Optimization'],
                icon: Briefcase
            },
            {
                title: 'Robot Operating System',
                description: 'The framework. Master ROS 2, the industry standard middleware that allows different robot parts to communicate.',
                topics: ['Nodes & Topics', 'Pub/Sub Model', 'Services & Actions', 'Linux for Robotics'],
                icon: Settings
            },
            {
                title: 'Perception & Connectivity',
                description: 'The eyes. Use Lidar, Cameras, and industrial protocols (MQTT/Modbus) to create a digital map of the environment.',
                topics: ['Computer Vision', 'Lidar Mapping', 'IoT Protocols', 'Sensor Fusion'],
                icon: Activity
            },
            {
                title: 'Autonomous Navigation',
                description: 'The pilot. Implement SLAM and path-planning algorithms to enable robots to move safely from Point A to Point B.',
                topics: ['SLAM', 'A* Pathfinding', 'Obstacle Avoidance', 'Navigation Stack'],
                icon: Map
            },
            {
                title: 'Robotic Manipulation',
                description: 'The hands. Program robotic arms to pick, place, and sort objects with precision based on business logic.',
                topics: ['Inverse Kinematics', 'Grasping Logic', 'Coordinate Systems', 'Arm Control'],
                icon: Bot
            },
            {
                title: 'Simulation & Digital Twins',
                description: 'The test ground. Prototype your robots in 3D physics simulators (Gazebo/Isaac) to validate designs before building.',
                topics: ['Gazebo/Isaac Sim', 'URDF Modeling', 'Physics Engines', 'Virtual Testing'],
                icon: Monitor
            },
            {
                title: 'AI-Powered Robotics',
                description: 'The future. Integrate Vision ML and GenAI to create smarter robots that can adapt to unstructured environments.',
                topics: ['Vision Transformers', 'Reinforcement Learning', 'AI Edge Deployment', 'Smart Decisioning'],
                icon: Sparkles
            }
        ]
    },

    {
        id: 'devops',
        title: 'DevOps Engineering',
        shortTitle: 'DevOps',
        category: 'Operations',
        icon: Server,
        shortDesc: 'Build an "Automated CI/CD Pipeline" for a high-scale microservices app.',
        modules: [
            {
                title: 'Programming & OS Fundamentals',
                description: 'The toolbox. Master Python automation, Shell scripting, and Linux commands to control servers effectively.',
                topics: ['Python Scripting', 'Bash/Shell', 'Linux Commands', 'Process Management'],
                icon: Terminal
            },
            {
                title: 'Database Infrastructure (SQL/NoSQL)',
                description: 'The store. Understand how to provision, secure, and manage RDBMS (PostgreSQL) and NoSQL (MongoDB) databases.',
                topics: ['DB Provisioning', 'Backup & Replication', 'SQL vs NoSQL', 'Scaling Stores'],
                icon: Database
            },
            {
                title: 'Web Application Architecture',
                description: 'The workload. Understand how modern 3-tier web applications work to better deploy and manage them.',
                topics: ['Frontend vs Backend', 'API Gateways', 'Load Balancing', 'Caching Strategies'],
                icon: Globe
            },
            {
                title: 'Data Engineering Architecture',
                description: 'The flow. Learn how massive data pipelines are architected and managed in production environments.',
                topics: ['Pipeline Orchestration', 'Kafka/Messaging', 'ETL Flows', 'Data Reliability'],
                icon: Layers
            },
            {
                title: 'Data Analysis & Visualization',
                description: 'The visibility. Learn to query logs and metrics to visualize system health and business impact.',
                topics: ['Log Analytics', 'Metrics Visualization', 'Dashboards', 'System Health'],
                icon: BarChart
            },
            {
                title: 'IoT Architecture',
                description: 'The edge. Understand how connected devices communicate and how to manage edge infrastructure.',
                topics: ['MQTT & IoT Protocols', 'Edge Computing', 'Device Management', 'Connectivity'],
                icon: Cpu
            },
            {
                title: 'Cloud Computing Services',
                description: 'The platform. Master core cloud services (AWS/Azure) for compute, networking, and storage.',
                topics: ['AWS/Azure Core', 'VPC & Networking', 'IAM & Security', 'Cost Optimization'],
                icon: Cloud
            },
            {
                title: 'Containerization (Docker)',
                description: 'The shipping. Package applications into portable containers that run consistently across all environments.',
                topics: ['Docker Engine', 'Container Security', 'Multi-stage Builds', 'Microservices'],
                icon: Box
            },
            {
                title: 'Orchestration & CI/CD',
                description: 'The factory. Scale with Kubernetes and automate the entire software delivery pipeline.',
                topics: ['Kubernetes (K8s)', 'Helm Charts', 'CI/CD Pipelines', 'GitOps'],
                icon: GitBranch
            },
            {
                title: 'Generative AI for Ops',
                description: 'The future assistant. Use GenAI to generate Infrastructure as Code (IaC) and debug production incidents.',
                topics: ['AI for DevOps', 'Auto-Remediation', 'IaC Generation', 'Incident Response'],
                icon: Sparkles
            }
        ]
    },

    {
        id: 'web-app',
        title: 'Web App Development',
        shortTitle: 'Web App',
        category: 'Web Development',
        icon: Globe,
        shortDesc: 'Build a production-ready "E-Commerce Platform" from scratch. Master the stack by solving real business challenges.',
        modules: [
            {
                title: 'Programming Fundamentals',
                description: 'Refine the logic. Master problem-solving using JavaScript. Understand algorithms that power efficient web applications.',
                topics: ['JavaScript Logic', 'Arrays & Objects', 'ES6+ Features', 'Functional Programming'],
                icon: Code
            },
            {
                title: 'Web Fundamentals',
                description: 'The skeleton. Master HTML5 and CSS3 to structure content and design beautiful, responsive layouts for any device.',
                topics: ['Semantic HTML', 'CSS Flexbox/Grid', 'Responsive Design', 'Accessibility'],
                icon: Layout
            },
            {
                title: 'JavaScript Deep Dive',
                description: 'Bring it to life. Learn the core language of the web, focusing on DOM manipulation, events, and asynchronous programming.',
                topics: ['DOM Manipulation', 'Event Handling', 'Async/Await', 'Fetch API'],
                icon: Terminal
            },
            {
                title: 'Databases (SQL & NoSQL)',
                description: 'Store the data. Master both structured (MySQL) and flexible (MongoDB) databases to handle user data efficiently.',
                topics: ['Schema Design', 'SQL Queries', 'NoSQL Documents', 'Data Relations'],
                icon: Database
            },
            {
                title: 'Backend Development',
                description: 'The engine. Build powerful server-side applications using Node.js and Express to handle API requests and business logic.',
                topics: ['Node.js Runtime', 'Express Server', 'RESTful APIs', 'Middleware'],
                icon: Server
            },
            {
                title: 'Frontend Framework',
                description: 'The interface. Master React.js to build dynamic, single-page applications with reusable component architectures.',
                topics: ['React Components', 'Props & State', 'React Router', 'Component Lifecycle'],
                icon: Globe
            },
            {
                title: 'Advanced Frontend',
                description: 'Scale the UI. Manage complex application state globally using Redux and enhance performance with advanced hooks.',
                topics: ['Redux Toolkit', 'Custom Hooks', 'Performance Optimization', 'Context API'],
                icon: Layers
            },
            {
                title: 'Full Stack Integration',
                description: 'Connect the dots. Link your frontend to your backend securely, handling authentication and data flow seamlessly.',
                topics: ['API Integration', 'JWT Auth', 'Secure Data Flow', 'Error Handling'],
                icon: Infinity
            },
            {
                title: 'Cloud & Deployment',
                description: 'Go live. Dockerize your application and deploy it to cloud platforms like Vercel or AWS for the world to see.',
                topics: ['Git & GitHub', 'Docker Basics', 'CI/CD Pipelines', 'Cloud Hosting'],
                icon: Cloud
            },
            {
                title: 'GenAI for Web',
                description: 'Future proof. Integrate AI models to add smart features like chatbots or content generation to your web apps.',
                topics: ['AI API Integration', 'Smart Features', 'Chatbot UI', 'Prompt Engineering'],
                icon: Sparkles
            }
        ]
    }
];
