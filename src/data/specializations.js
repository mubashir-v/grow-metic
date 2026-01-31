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
    Briefcase
} from 'lucide-react';

// Images assigned based on module context
const IMG_PLANNING = '/assets/images/student_planning.png';
const IMG_CODING = '/assets/images/student_coding.png';
const IMG_ANALYSIS = '/assets/images/student_analysis.png';
const IMG_CLOUD = '/assets/images/student_cloud.png';
const IMG_AI = '/assets/images/student_ai.png';
const IMG_LEADERSHIP = '/assets/images/student_leadership.png';

export const specializations = [
    {
        id: 'mern',
        title: 'MERN Stack Development',
        category: 'Web Development',
        icon: Globe,
        shortDesc: 'Build a production-ready "E-Commerce Platform" from scratch. Master the stack by solving real business challenges.',
        modules: [
            {
                title: 'The Storefront (UI)',
                description: 'First, we need a face for our business. Design and build the customer-facing Home and Product pages using React to ensure a pixel-perfect first impression.',
                topics: ['Figma to React', 'Component Design', 'Responsive Layouts', 'UX Principles'],
                image: IMG_PLANNING
            },
            {
                title: 'User Action (Logic)',
                description: 'Now, let\'s make it work. Add functionality for users to browse, search products, and manage their interactive shopping cart state.',
                topics: ['State Management (Redux)', 'React Hooks', 'Dynamic Filtering', 'User Interactions'],
                image: IMG_CODING
            },
            {
                title: 'The Engine (Backend)',
                description: 'We need to save data. Connect the frontend to a secure Node.js server. Build APIs to handle real-time inventory checks and order placement.',
                topics: ['REST API Design', 'Node.js & Express', 'MongoDB Schema', 'Data Validation'],
                image: IMG_CODING
            },
            {
                title: 'Gatekeeper (Security)',
                description: 'Protect the customers. Implement robust Authentication (Login/Signup) to secure user profiles and payments.',
                topics: ['JWT Authentication', 'Password Encryption', 'Protected Routes', 'Security Best Practices'],
                image: IMG_CLOUD
            },
            {
                title: 'Go Live (Deployment)',
                description: 'Open for business. Package the app using Docker and deploy it to a live cloud server so customers worldwide can visit your shop.',
                topics: ['Dockerizing Apps', 'CI/CD Pipelines', 'Cloud Deployment', 'Domain & SSL'],
                image: IMG_CLOUD
            }
        ]
    },
    {
        id: 'data-eng',
        title: 'Data Engineering (AWS)',
        category: 'Cloud & Data',
        icon: Cloud,
        recommended: true,
        shortDesc: 'Architect an "End-to-End Retail Analytics Pipeline". Move data from raw sources to business insights on AWS.',
        modules: [
            {
                title: 'Raw Collection',
                description: 'The data is messy and scattered. Write scripts to capture raw logs from the E-Commerce app and dump them into our Data Lake.',
                topics: ['Data Ingestion', 'Python Scripting', 'AWS S3 Data Lake', 'Handling JSON/Logs'],
                image: IMG_CLOUD
            },
            {
                title: 'The Cleanup (ETL)',
                description: 'It\'s too messy to read. Build a Spark job to clean, format, and filter the data, turning chaos into structured tables.',
                topics: ['PySpark Transformations', 'Data Cleaning', 'AWS Glue', 'Schema Enforcement'],
                image: IMG_CODING
            },
            {
                title: 'The Vault (Warehousing)',
                description: 'Store it for speed. Load the cleaned data into a high-performance Data Warehouse optimized for business questions.',
                topics: ['Amazon Redshift', 'Data Modeling', 'Star Schema', 'Loading Strategies'],
                image: IMG_CODING
            },
            {
                title: 'Automation (Orchestration)',
                description: 'Put it on autopilot. Set up Airflow to run this entire pipeline every midnight automatically, so reports are always fresh.',
                topics: ['Apache Airflow', 'DAG Scheduling', 'Error Handling', 'Monitoring Pipelines'],
                image: IMG_CLOUD
            }
        ]
    },
    {
        id: 'data-analysis',
        title: 'Data Analysis',
        category: 'Data Science',
        icon: BarChart,
        recommended: true,
        shortDesc: 'Create a "Sales Performance Dashboard" to drive executive decisions.',
        modules: [
            {
                title: 'Accessing Reality (SQL)',
                description: 'The business needs answers. Write complex SQL queries to pull the exact sales numbers from the company database.',
                topics: ['Advanced SQL', 'Joins & Aggregations', 'Database Querying', 'Data Extraction'],
                image: IMG_ANALYSIS
            },
            {
                title: 'Cleaning the Noise',
                description: 'The numbers don\'t add up. Use Python to identify outliers, fix missing values, and prepare the dataset for analysis.',
                topics: ['Pandas & NumPy', 'Data Wrangling', 'Data Quality', 'Statistical Cleaning'],
                image: IMG_CODING
            },
            {
                title: 'Finding the Story (EDA)',
                description: 'Explore the trends. Create initial charts to discover why sales dipped last month. Is it seasonality or a bad product?',
                topics: ['Exploratory Analysis', 'Hypothesis Testing', 'Trend Identification', 'Business Context'],
                image: IMG_ANALYSIS
            },
            {
                title: 'The Executive Dashboard',
                description: 'Present the solution. Build an interactive Dashboard that the CEO can use to track Revenue and Growth in real-time.',
                topics: ['PowerBI / Tableau', 'Dashboard Design', 'Visual Storytelling', 'KPI Validation'],
                image: IMG_LEADERSHIP
            }
        ]
    },
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        category: 'Artificial Intelligence',
        icon: BrainCircuit,
        recommended: true,
        shortDesc: 'Develop a "Smart Customer Recommendation Engine" to boost engagement.',
        modules: [
            {
                title: 'Listening to Behavior',
                description: 'What do users like? Collect and process user interaction history to create a "feature set" that describes their preferences.',
                topics: ['Data Collection', 'Feature Engineering', 'User Profiling', 'Matrix Construction'],
                image: IMG_ANALYSIS
            },
            {
                title: 'Training the Brain',
                description: 'Teach the machine. Feed the history into an ML algorithm so it learns to predict what a user might buy next.',
                topics: ['Model Selection', 'Scikit-Learn', 'Training Loops', 'Accuracy Metrics'],
                image: IMG_CODING
            },
            {
                title: 'Optimization & Tuning',
                description: 'Make it smarter. Tweak the model\'s internal settings (hyperparameters) to improve its guess rate from 70% to 95%.',
                topics: ['Hyperparameter Tuning', 'Grid Search', 'Overfitting Checks', 'Model Validation'],
                image: IMG_AI
            },
            {
                title: 'Deployment (API)',
                description: 'Connect it to the app. Wrap the model in an API so the E-Commerce website can ask for recommendations in real-time.',
                topics: ['FastAPI / Flask', 'Model Serialization', 'API Integration', 'Response Optimization'],
                image: IMG_CLOUD
            }
        ]
    },
    {
        id: 'robotics',
        title: 'Robotics & AI',
        category: 'Hardware & AI',
        icon: Bot,
        shortDesc: 'Engineer an "Autonomous Warehouse Delivery Bot" to optimize logistics.',
        modules: [
            {
                title: 'The Body (Hardware)',
                description: 'Build the machine. Interface the micro-controller with motors for movement and sensors to detect the environment.',
                topics: ['Circuit Design', 'Sensor Interface', 'Motor Drivers', 'Embedded C'],
                image: IMG_AI
            },
            {
                title: 'The Brain (OS)',
                description: 'Give it life. Install ROS (Robot Operating System) to manage the hardware and allow different parts to talk to each other.',
                topics: ['ROS 2 Setup', 'Nodes & Topics', 'Linux for Robots', 'System Architecture'],
                image: IMG_CODING
            },
            {
                title: 'The Eyes (Perception)',
                description: 'Let it see. Use Lidar and Cameras to create a digital map of the warehouse floor so it knows where obstacles are.',
                topics: ['Lidar Mapping', 'Computer Vision/OpenCV', 'SLAM', 'Object Detection'],
                image: IMG_AI
            },
            {
                title: 'The Pilot (Navigation)',
                description: 'Move autonomously. Program the path-finding algorithms so it can drive from Shelf A to Packing Station B without hitting anything.',
                topics: ['Path Planning (A*)', 'Autonomous Navigation', 'Obstacle Avoidance', 'Motion Control'],
                image: IMG_AI
            }
        ]
    },
    {
        id: 'cybersec',
        title: 'Networking & Cyber Security',
        category: 'Security',
        icon: Shield,
        shortDesc: 'Secure a "Corporate Banking Infrastructure" against modern threats.',
        modules: [
            {
                title: 'Building the Perimeter',
                description: 'Design the fortress. Architect a secure network topology with firewalls and DMZs to isolate sensitive banking data.',
                topics: ['Network Architecture', 'Firewalls & DMZ', 'Subnetting', 'Secure Protocols'],
                image: IMG_CLOUD
            },
            {
                title: 'The Attack (Red Team)',
                description: 'Act like a hacker. Attempt to break into your own system using Kali Linux tools to find weak spots and vulnerabilities.',
                topics: ['Penetration Testing', 'SQL Injection', 'Vulnerability Scanning', 'Kali Linux'],
                image: IMG_CODING
            },
            {
                title: 'The Defense (Blue Team)',
                description: 'Patch the holes. Fix the vulnerabilities you found and harden the servers against future attacks.',
                topics: ['System Hardening', 'Patch Management', 'Secure Configuration', 'Access Control'],
                image: IMG_CLOUD
            },
            {
                title: 'The Watchtower (SOC)',
                description: 'Constant vigilance. Set up monitoring tools to detect and alert on any suspicious activity in real-time.',
                topics: ['SIEM Tools', 'Log Monitoring', 'Threat Detection', 'Incident Response'],
                image: IMG_ANALYSIS
            }
        ]
    },
    {
        id: 'devops',
        title: 'DevOps Engineering',
        category: 'Operations',
        icon: Server,
        shortDesc: 'Build an "Automated CI/CD Pipeline" for a high-scale microservices app.',
        modules: [
            {
                title: 'Packaging (Docker)',
                description: 'No more "it works on my machine". Package the application into lightweight, portable containers that run anywhere.',
                topics: ['Docker Basics', 'Dockerfile', 'Container Management', 'Microservices'],
                image: IMG_CLOUD
            },
            {
                title: 'Orchestration (K8s)',
                description: 'Manage the fleet. Deploy hundreds of these containers onto a cluster that self-heals and auto-scales.',
                topics: ['Kubernetes', 'Cluster Management', 'Pod Autoscaling', 'Service Discovery'],
                image: IMG_CLOUD
            },
            {
                title: 'The Factory (CI/CD)',
                description: 'Automate delivery. Build a pipeline that automatically tests and deploys code whenever a developer saves a file.',
                topics: ['Jenkins / GitHub Actions', 'Automated Testing', 'Deployment Pipelines', 'Version Control'],
                image: IMG_CODING
            },
            {
                title: 'The Watchman (SRE)',
                description: 'Keep it reliable. Set up dashboards to monitor server health and alert the team before the system crashes.',
                topics: ['Prometheus', 'Grafana Dashboards', 'Alerting Rules', 'Reliability Engineering'],
                image: IMG_ANALYSIS
            }
        ]
    },
    {
        id: 'growmetic-360',
        title: 'Growmetic 360°: The Full-Spectrum Innovator',
        category: '360° Business Mindset',
        icon: Infinity,
        recommended: true,
        shortDesc: 'The industry needs "360° Thinkers," not just coders. Develop a holistic business mindset by mastering every domain: App, Data, AI, & Ops.',
        modules: [
            {
                title: 'The Product (MVP)',
                description: 'It starts with an idea. Build the core Web & Mobile platforms (MERN + Flutter) where customers actually interact with the business.',
                topics: ['Full Stack Dev', 'Mobile App', 'MVP Strategy', 'User Experience'],
                image: IMG_PLANNING
            },
            {
                title: 'The Data Layer',
                description: 'Capture the usage. Build pipelines to collect user data and store it, so we can understand what\'s happening in the business.',
                topics: ['Data Pipelines', 'Big Data Processing', 'Data Lake', 'Analytics'],
                image: IMG_ANALYSIS
            },
            {
                title: 'The Intelligence (AI)',
                description: 'Predict the future. Use that data to train AI models that forecast sales and recommend products to users.',
                topics: ['Machine Learning', 'Predictive Models', 'Personalization', 'Data Science'],
                image: IMG_CODING
            },
            {
                title: 'The Automation (GenAI)',
                description: 'Scale the support. Integrate Generative AI agents to handle customer queries and automate content creation.',
                topics: ['LLM Integration', 'AI Agents', 'Automation', 'Natural Language'],
                image: IMG_AI
            },
            {
                title: 'The Physical World',
                description: 'Move the atoms. Simulate the robotic warehouse that physically fulfills the orders placed on the app.',
                topics: ['Robotics (ROS)', 'IoT Integration', 'Automation Logic', 'Hardware Control'],
                image: IMG_AI
            },
            {
                title: 'The Infrastructure',
                description: 'Scale the globe. Deploy this entire ecosystem onto the cloud with automated pipelines to serve millions of users.',
                topics: ['Cloud Architecture', 'DevOps Pipelines', 'Kubernetes', 'Global Scale'],
                image: IMG_CLOUD
            },
            {
                title: 'The Leadership',
                description: 'Lead the industry. brings it all together with Agile management, effective communication, and strategic decision making.',
                topics: ['Agile Leadership', 'Communication', 'Strategy', 'Team Management'],
                image: IMG_LEADERSHIP
            }
        ]
    }
];
