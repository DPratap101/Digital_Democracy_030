
import React, { useState } from 'react';
import '../styles/JobList.css';

const JobListings = ({ selectedCategory }) => {
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');
  
  const jobListings = [
    {
      company: 'Make Relish',
      logo:"https://mir-s3-cdn-cf.behance.net/661b433093dc941807a5c29d9d9e0c85/48683006-a5ce-430c-ab50-65987866a1a2_acc_180x180.png?h=6c973923e700075387367743698bd81a",
      location: 'Anywhere',
      title: 'Remote Production Coordinator - Argentina, Colombia...',
      description: 'We are looking for an awesome Production Coordinator',
      daysAgo: '14 days ago',
      category: 'Logo Design',
    },
    {
      company: "stellenmanufaktur",
      logo:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/f34165a603fbc0a29d53f4d9d0b0280a",
      location: 'Anywhere',
      title: 'Webdesigner und Webprogrammierer gesuch... ',
      description: 'We are seeking a talented and experienced Full Stack WordPress Developer to join our team  ',
      daysAgo: '2 month ago',
      category: 'Website Design',
    },

    {
      company: 'Make Relish',
      logo:"https://mir-s3-cdn-cf.behance.net/661b433093dc941807a5c29d9d9e0c85/48683006-a5ce-430c-ab50-65987866a1a2_acc_180x180.png?h=6c973923e700075387367743698bd81a",
      location: 'Anywhere',
      title: 'Remote Brand Specialist - Argentina, Colombia, India...',
      description: 'We are looking for an awesome Brand Specialist',
      daysAgo: '20 days ago',
      category: 'Branding Services',
    },
    {
      company: 'Make Relish',
      logo:"https://mir-s3-cdn-cf.behance.net/661b433093dc941807a5c29d9d9e0c85/48683006-a5ce-430c-ab50-65987866a1a2_acc_180x180.png?h=6c973923e700075387367743698bd81a",
      location: 'Anywhere',
      title: 'Remote Creative Quality Specialist - Argentina, Colombia...',
      description: 'We are on the lookout for Creative Quality Specialists',
      daysAgo: '20 days ago',
      category: 'Logo Design',
    },
    {
      company: "Uptown 6 October De...",
      logo:"https://peopleofthewoods.com/cdn/shop/products/POTW-removebg-preview_1_2048x.png?v=1667483984",
      location: 'Al-Sheikh Zayed, Egypt',
      title: 'Full Stack WordPress Developer',
      description: 'We are seeking a talented and experienced Full Stack WordPress Developer to join our team  ',
      daysAgo: 'a month ago',
      category: 'Website Design',
    },

    {
      company: 'Webicient',
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLvXs5sLTb69bSSBSOn6hioCxr81jBCa4Wxt6LFQ6HyAItDt_",
      location: 'Anywhere',
      title: 'Senior UI/UX Designer with Brand Skills (Remote)',
      description: 'We are now looking for a Senior UI/UX Designer with Branding Skills',
      daysAgo: '20 days ago',
      category: 'UI/UX Design',
    },
    {
      company: "Vilgain",
      logo:"https://down-id.img.susercontent.com/file/50320db24056b7a176d9d7f0e02eb748_tn",
      location: 'India',
      title: 'Graphic Designer for packaging',
      description: 'Packaging Designer Wanted! ',
      daysAgo: '2 days ago',
      category: 'Packaging Design',
    },
    {
      company: "Vân Anh Phạm",
      logo:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQt4tUJGNsTi2E5iFLFpexahdC8yBGZEQlOxwrHDbB9EVq3I5_n",
      location: 'Bắc Ninh',
      title: 'Vietnam Graphic Designer(Packaging/Printing, for Viet...',
      description: 'Nhân viên Thiết kế đồ họa mảng bao bì,in an ',
      daysAgo: '24 days ago',
      category: 'Packaging Design',
    },

    {
      company: "Rosen's Diversified,Inc.",
      logo:"https://media.istockphoto.com/id/1399472601/vector/registered-trademark-symbol-line-art-style.jpg?s=612x612&w=0&k=20&c=nP_YwjyHOcLNTqXzypK7z6m9lZpCkhziDDDL4wYFWHY=",
      location: 'NE,USA',
      title: 'Technical Artist',
      description: 'Various Packaging, Digital, & Print Materials ',
      daysAgo: '16 hours ago',
      category: 'Website Design',
    },
    {
      company: "Nexa Digital Web Des...",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALjCi7vs-Ut30mvn5u4zNvOaFpUo0K7OYOiQ2MzmvPRlfxS5u",
      location: 'Anywhere',
      title: 'Video Editor (Remote role)',
      description: 'We are currently looking to urgently hire a Video Editor who would work remotely. ',
      daysAgo: '8 days ago',
      category: 'Illustrations',
    },
    {
      company: "Dressfolk Private Limi....",
      logo:"https://pilulkacz.vshcdn.net/zoh4eiLi/IMG/86400/bwi9UZdOgBvG4jlqF6PW6J--tphYEPZoqY6BH900cO8/aHR0cHM6Ly9waWx1bGthLnMzLWNlbnRyYWwudnNob3N0aW5nLmNsb3VkL3BpbHVsa2EtY3ovZmlsZXMvaW1hZ2VzLzIwMjEtMDUvYTY4NzdkMGIyNThiYjdkNmY0ZjcwMDI4YmFlNDAzMWMuanBn.jpg",
      location: 'Gurgaon',
      title: 'Video Editor (Remote role)',
      description: 'India Visual Communication Lead Looking For The Next Jony Ive. ',
      daysAgo: '23 days ago',
      category: 'Illustrations',
    },
    {
      company: "Snaptics Business So...",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdndY6StCg5xp0AZ41dZ4RUjnVveTjQtr8h2rZTKQm1lgT33t",
      location: 'India',
      title: 'Looking for UI/UX Designer',
      description: 'Looking for UI/UX designers. ',
      daysAgo: '9 days ago',
      category: 'Illustrations',
    },
    {
      company: "Juntrax Solutions",
      logo:"https://cdn.cutshort.io/public/socialshare-ogimage/id66cfabf08ac7600027164e15time1724886080082-og.jpg",
      location: 'India',
      title: 'UI/UX Designer',
      description: 'UI/UX Designer for B2B Product Company',
      daysAgo: '6 days ago',
      category: 'UI/UX Design',
    },
    {
      company: "Awesomic",
      logo:"https://techcos.co/wp-content/uploads/2024/06/awesomic.png",
      location: 'Anywhere',
      title: 'Senior UI/UX Designer',
      description: 'Looking for UI/UX Designer to tackle projects',
      daysAgo: '10 days ago',
      category: 'UI/UX Design',
    },
    {
      company: "azzans",
      logo:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAGKxXZVFxH6B3-LKTpLlH2onYhiXhu1oHDUvYFl_WjokARE8T",
      location: 'Pakistan',
      title: 'interior designer',
      description: 'interior designer visualizer',
      daysAgo: '14 days ago',
      category: 'Architecture & Interior Design',
    },
    {
      company: "Uptown 6 October De...",
      logo:"https://peopleofthewoods.com/cdn/shop/products/POTW-removebg-preview_1_2048x.png?v=1667483984",
      location: 'Al-Sheikh Zayed, Egypt',
      title: 'Full Stack WordPress Developer',
      description: 'We are seeking a talented and experienced Full Stack WordPress Developer to join our team',
      daysAgo: 'a month ago',
      category: 'Architecture & Interior Design',
    },
    {
      company: "AZZAN ARBI",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOq509B61xcjpGD2eYd9JaQVZnQbONuHRU_Q&s",
      location: 'Islamabad, Pakistan',
      title: '3D VISUALIZER /interior designer',
      description: '3D VISUALIZER/interior designer',
      daysAgo: '14 days ago',
      category: 'Architecture & Interior Design',
    },
    {
      company: "kiran tandon",
      logo:"https://patexstudios.com/wp-content/uploads/2024/03/Frame-35496.png",
      location: 'New Delhi, India',
      title: 'Interior Designer',
      description: 'interior designer with 2-3 years required to work on luxurious residential projects',
      daysAgo: 'a month ago ',
      category: 'Architecture & Interior Design',
    },
    {
      company: "Design Talk",
      logo:"https://yt3.googleusercontent.com/D3-YknXnAkhgBEgLhTLE7X1iXLryaGaP8bX3HBfFr5n4zIEN_als3PzQJNsyFJXayu2HgjGUXAE=s900-c-k-c0x00ffffff-no-rj",
      location: 'India',
      title: 'Graphic Designer | Canva',
      description: 'we are looking for creative designer with advance canva designing skills.',
      daysAgo: '19 days ago ',
      category: 'Branding Services',
    },
    {
      company: "drumstick design",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeH0xau2EmmElTGSgJ_umzeV06tE9poKwiGWSA7T0cw-j8Z8C",
      location: 'Gurgaon, India',
      title: 'Senior Graphic designer',
      description: 'Looking for senior graphic designer.',
      daysAgo: '22 days ago ',
      category: 'Branding Services',
    },
    {
      company: "Bosscoder Academy",
      logo:"https://thumbs.dreamstime.com/z/three-way-direction-arrow-isometric-flat-icon-d-vector-colorful-illustration-pictogram-isolated-white-background-87961917.jpg",
      location: 'India',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '8 days ago',
      category: 'Branding Services',
    },
    {
      company: "WAYPOINT",
      logo:"https://protyon.tech/wp-content/uploads/2023/02/protyon-logo-1.svg",
      location: 'Argentina',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '25 days ago',
      category: 'Branding Services',
    },
    {
      company: "Mohit K",
      logo:"https://joi.studio/wp-content/uploads/2024/02/Mask-group.png",
      location: 'Kolkata, India',
      title: 'Fashion Designer',
      description: 'Create innovative kidswear designs using CAD.',
      daysAgo: '9 days ago',
      category: 'Branding Services',
    },
    {
      company: "Mohit K",
      logo:"https://joi.studio/wp-content/uploads/2024/02/Mask-group.png",
      location: 'Kolkata, India',
      title: 'Fashion Designer',
      description: 'Create innovative kidswear designs using CAD.',
      daysAgo: '9 days ago',
      category: 'Branding Services',
    },
    {
      company: "WAYPOINT",
      logo:"https://protyon.tech/wp-content/uploads/2023/02/protyon-logo-1.svg",
      location: 'Argentina',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '25 days ago',
      category: 'Branding Services',
    },
    {
      company: "WAYPOINT",
      logo:"https://protyon.tech/wp-content/uploads/2023/02/protyon-logo-1.svg",
      location: 'Argentina',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '25 days ago',
      category: 'Branding Services',
    },
    {
      company: "Bosscoder Academy",
      logo:"https://thumbs.dreamstime.com/z/three-way-direction-arrow-isometric-flat-icon-d-vector-colorful-illustration-pictogram-isolated-white-background-87961917.jpg",
      location: 'India',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '8 days ago',
      category: 'Branding Services',
    },
    {
      company: "Storysideup",
      logo:"https://cdn-icons-png.flaticon.com/512/9000/9000078.png",
      location: 'India',
      title: 'PR Manager',
      description: 'Looking for a passionate Fashion Enthusiast who have experience in International PR ',
      daysAgo: '18 days ago',
      category: 'Branding Services',
    },

    {
      company: "Option 1 Event Servic...",
      logo:"https://lafabriqueduneon.fr/wp-content/uploads/2024/05/Sans-titre-200-x-200-px-1.png",
      location: 'Pune,',
      title: 'India 3D Visualizer',
      description: '3D VISUALIZER',
      daysAgo: '8 days ago',
      category: 'Branding Services',
    },

    {
      company: "Design Talk",
      logo:"https://yt3.googleusercontent.com/D3-YknXnAkhgBEgLhTLE7X1iXLryaGaP8bX3HBfFr5n4zIEN_als3PzQJNsyFJXayu2HgjGUXAE=s900-c-k-c0x00ffffff-no-rj",
      location: 'India',
      title: 'Graphic Designer | Canva',
      description: 'we are looking for creative designer with advance canva designing skills.',
      daysAgo: '19 days ago ',
      category: 'Logo Design',
    },


    {
      company: "Vân Anh Phạm",
      logo:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQt4tUJGNsTi2E5iFLFpexahdC8yBGZEQlOxwrHDbB9EVq3I5_n",
      location: 'Bắc Ninh, Vietnam',
      title: 'Graphic Designer (Packaging/Printing, for Vietnamese Locals)',
      description: 'Nhân viên Thiết kế đồ họa mảng bao bì, in ấn',
      daysAgo: '24 days ago ',
      category: 'Logo Design',
    },


    {
      company: "Mohit K",
      logo:"https://joi.studio/wp-content/uploads/2024/02/Mask-group.png",
      location: 'Kolkata, India',
      title: 'Fashion Designer',
      description: 'Create innovative kidswear designs using CAD.',
      daysAgo: '9 days ago ',
      category: 'Logo Design',
    },


    {
      company: "WAYPOINT",
      logo:"https://protyon.tech/wp-content/uploads/2023/02/protyon-logo-1.svg",
      location: 'Argentina',
      title: 'Graphic Designer',
      description: 'We are looking for a talented Graphic Designer with an eye for detail',
      daysAgo: '25 days ago ',
      category: 'Logo Design',
    },


    {
      company: "D Dressfolk Private Limi...",
      logo:"https://pilulkacz.vshcdn.net/zoh4eiLi/IMG/86400/bwi9UZdOgBvG4jlqF6PW6J--tphYEPZoqY6BH900cO8/aHR0cHM6Ly9waWx1bGthLnMzLWNlbnRyYWwudnNob3N0aW5nLmNsb3VkL3BpbHVsa2EtY3ovZmlsZXMvaW1hZ2VzLzIwMjEtMDUvYTY4NzdkMGIyNThiYjdkNmY0ZjcwMDI4YmFlNDAzMWMuanBn.jpg",
      location: 'Gurgaon, India',
      title: 'Visual Communication Lead',
      description: 'Looking For The Next Jony Ive',
      daysAgo: 'a month ago ',
      category: 'Logo Design',
    },


    {
      company: "RRD",
      logo:"data:image/png;base64,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",
      location: 'Chennai, India',
      title: 'Visualisers',
      description: 'RRD Hiring Visualisers',
      daysAgo: '23 days ago ',
      category: 'Logo Design',
    },

    {
      company: "Jazba Curators LLP",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EB_Iulx-RdyTM5CwinDtrAZVJ8ODlg7VNQ&s",
      location: 'Baroda, India',
      title: 'Creative Designer',
      description: 'Creative Designer',
      daysAgo: '24 days ago ',
      category: 'Logo Design',
    },

    {
      company: "Dejavu Dubai",
      logo:"https://media.trustradius.com/product-logos/rR/PI/VQ2QQQXXC2TL-180x180.PNG",
      location: 'Dubai, United Arab Emirates',
      title: 'Dubai, United Arab Emirates',
      description: 'We are looking for an innovative and creative Art Director / Illustrator',
      daysAgo: '21 month ago ',
      category: 'Logo Design',
    },


    {
      company: "sofsy International",
      logo:"https://media.licdn.com/dms/image/v2/C560BAQHhyQzCG_86Ww/company-logo_200_200/company-logo_200_200/0/1643842076903/sofsy_logo?e=2147483647&v=beta&t=H5zYICtrlC7rem05NbSbzfOItvF7oZXPB8arF3UZWAo",
      location: 'Bangkok, Thailand',
      title: 'Junior Photo Retoucher',
      description: 'We are hiring a creative and passionate individual as a Junior Photo Retoucher.',
      daysAgo: '23 days ago ',
      category: 'Logo Design',
    },

    {
      company: "DEAI",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWwq5fcH3hQVJd8RMqXWQP6_kJhWuma3CbYZ_2rvtc_hq33PO79pIILJvcQrDYT9Pg5Q&usqp=CAU",
      location: 'Egypt',
      title: 'Finalizer Graphic Designer',
      description: 'Finalizer',
      daysAgo: '15 days ago ',
      category: 'Logo Design',
    },
    {
      company: "Pimpam Studio ",
      logo:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDQ2Zlg_Vkq6Ui8ukQYnsSMcDv2ZFMML1evTEx1UB534xqDau9",
      location: 'Ontinyent,Spain',
      title: 'Diseñador gráfico senior ',
      description: 'Senior Graphic Designer con más de 4 años de experiencia',
      daysAgo: '3 days ago',
      category: 'Branding Services',
    },

    {
      company: "Oval Atelier ",
      logo:"https://sharetribe.imgix.net/6022530a-b6ad-4d14-a85f-6062864d53ad/6261e007-5711-4711-8833-eabea30c83fc?auto=format&crop=edges&fit=crop&h=480&w=480&s=aec416e09c840fcedbe46007a77ac50b",
      location: 'India',
      title: 'Pro Create Intern ',
      description: 'We are looking for a Pro-Create Intern',
      daysAgo: '23 days ago',
      category: 'Illustrations',
    },
    {
      company: " Nexa Digital Web Des... ",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALjCi7vs-Ut30mvn5u4zNvOaFpUo0K7OYOiQ2MzmvPRlfxS5u",
      location: 'Anywhere',
      title: 'Video Editor (Remote role)',
      description: 'We are currently looking to urgently hire a Video Editor who would work remotely.',
      daysAgo: '8 days ago',
      category: 'Illustrations',
    },
    {
      company: "VIVA ",
      logo:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGGJ6kmfNt14OYO6XdBHyO6h9HJgNluwa5akVv7IGao1OoCjDz",
      location: 'Anywhere',
      title: 'Social Media Content Designer',
      description: '¡Buscamos a un Social Media Content Designer creativo y listo para unirse a VIVA! Visualisers',
      daysAgo: '22 days ago',
      category: 'Illustrations',
    },
    {
      company: 'Make Relish',
      logo:"https://mir-s3-cdn-cf.behance.net/661b433093dc941807a5c29d9d9e0c85/48683006-a5ce-430c-ab50-65987866a1a2_acc_180x180.png?h=6c973923e700075387367743698bd81a",
      location: 'Anywhere',
      title: 'Remote Production Coordinator - Argentina, Colombia...',
      description: 'We are looking for an awesome Production Coordinator',
      daysAgo: '14 days ago',
      category: 'Logo Design',
    },
    {
      company: "stellenmanufaktur",
      logo:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/f34165a603fbc0a29d53f4d9d0b0280a",
      location: 'Anywhere',
      title: 'Webdesigner und Webprogrammierer gesuch... ',
      description: 'We are seeking a talented and experienced Full Stack WordPress Developer to join our team  ',
      daysAgo: '2 month ago',
      category: 'Website Design',
    },

    {
      company: 'Make Relish',
      logo:"https://mir-s3-cdn-cf.behance.net/661b433093dc941807a5c29d9d9e0c85/48683006-a5ce-430c-ab50-65987866a1a2_acc_180x180.png?h=6c973923e700075387367743698bd81a",
      location: 'Anywhere',
      title: 'Remote Brand Specialist - Argentina, Colombia, India...',
      description: 'We are looking for an awesome Brand Specialist',
      daysAgo: '20 days ago',
      category: 'Branding Services',
    },
    {
      company: 'Make Relish',
      logo:"https://mir-s3-cdn-cf.behance.net/661b433093dc941807a5c29d9d9e0c85/48683006-a5ce-430c-ab50-65987866a1a2_acc_180x180.png?h=6c973923e700075387367743698bd81a",
      location: 'Anywhere',
      title: 'Remote Creative Quality Specialist - Argentina, Colombia...',
      description: 'We are on the lookout for Creative Quality Specialists',
      daysAgo: '20 days ago',
      category: 'Logo Design',
    },
    {
      company: "Uptown 6 October De...",
      logo:"https://peopleofthewoods.com/cdn/shop/products/POTW-removebg-preview_1_2048x.png?v=1667483984",
      location: 'Al-Sheikh Zayed, Egypt',
      title: 'Full Stack WordPress Developer',
      description: 'We are seeking a talented and experienced Full Stack WordPress Developer to join our team  ',
      daysAgo: 'a month ago',
      category: 'Website Design',
    },

    {
      company: 'Webicient',
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLvXs5sLTb69bSSBSOn6hioCxr81jBCa4Wxt6LFQ6HyAItDt_",
      location: 'Anywhere',
      title: 'Senior UI/UX Designer with Brand Skills (Remote)',
      description: 'We are now looking for a Senior UI/UX Designer with Branding Skills',
      daysAgo: '20 days ago',
      category: 'UI/UX Design',
    },
    {
      company: "Vilgain",
      logo:"https://down-id.img.susercontent.com/file/50320db24056b7a176d9d7f0e02eb748_tn",
      location: 'India',
      title: 'Graphic Designer for packaging',
      description: 'Packaging Designer Wanted! ',
      daysAgo: '2 days ago',
      category: 'Packaging Design',
    },
    {
      company: "Vân Anh Phạm",
      logo:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQt4tUJGNsTi2E5iFLFpexahdC8yBGZEQlOxwrHDbB9EVq3I5_n",
      location: 'Bắc Ninh',
      title: 'Vietnam Graphic Designer(Packaging/Printing, for Viet...',
      description: 'Nhân viên Thiết kế đồ họa mảng bao bì,in an ',
      daysAgo: '24 days ago',
      category: 'Packaging Design',
    },

    {
      company: "Rosen's Diversified,Inc.",
      logo:"https://media.istockphoto.com/id/1399472601/vector/registered-trademark-symbol-line-art-style.jpg?s=612x612&w=0&k=20&c=nP_YwjyHOcLNTqXzypK7z6m9lZpCkhziDDDL4wYFWHY=",
      location: 'NE,USA',
      title: 'Technical Artist',
      description: 'Various Packaging, Digital, & Print Materials ',
      daysAgo: '16 hours ago',
      category: 'Website Design',
    },
    {
      company: "Nexa Digital Web Des...",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALjCi7vs-Ut30mvn5u4zNvOaFpUo0K7OYOiQ2MzmvPRlfxS5u",
      location: 'Anywhere',
      title: 'Video Editor (Remote role)',
      description: 'We are currently looking to urgently hire a Video Editor who would work remotely. ',
      daysAgo: '8 days ago',
      category: 'Illustrations',
    },
    {
      company: "Dressfolk Private Limi....",
      logo:"https://pilulkacz.vshcdn.net/zoh4eiLi/IMG/86400/bwi9UZdOgBvG4jlqF6PW6J--tphYEPZoqY6BH900cO8/aHR0cHM6Ly9waWx1bGthLnMzLWNlbnRyYWwudnNob3N0aW5nLmNsb3VkL3BpbHVsa2EtY3ovZmlsZXMvaW1hZ2VzLzIwMjEtMDUvYTY4NzdkMGIyNThiYjdkNmY0ZjcwMDI4YmFlNDAzMWMuanBn.jpg",
      location: 'Gurgaon',
      title: 'Video Editor (Remote role)',
      description: 'India Visual Communication Lead Looking For The Next Jony Ive. ',
      daysAgo: '23 days ago',
      category: 'Illustrations',
    },
    {
      company: "Snaptics Business So...",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdndY6StCg5xp0AZ41dZ4RUjnVveTjQtr8h2rZTKQm1lgT33t",
      location: 'India',
      title: 'Looking for UI/UX Designer',
      description: 'Looking for UI/UX designers. ',
      daysAgo: '9 days ago',
      category: 'Illustrations',
    },
    {
      company: "Juntrax Solutions",
      logo:"https://cdn.cutshort.io/public/socialshare-ogimage/id66cfabf08ac7600027164e15time1724886080082-og.jpg",
      location: 'India',
      title: 'UI/UX Designer',
      description: 'UI/UX Designer for B2B Product Company',
      daysAgo: '6 days ago',
      category: 'UI/UX Design',
    },
    {
      company: "Awesomic",
      logo:"https://techcos.co/wp-content/uploads/2024/06/awesomic.png",
      location: 'Anywhere',
      title: 'Senior UI/UX Designer',
      description: 'Looking for UI/UX Designer to tackle projects',
      daysAgo: '10 days ago',
      category: 'UI/UX Design',
    },
    {
      company: "azzans",
      logo:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAGKxXZVFxH6B3-LKTpLlH2onYhiXhu1oHDUvYFl_WjokARE8T",
      location: 'Pakistan',
      title: 'interior designer',
      description: 'interior designer visualizer',
      daysAgo: '14 days ago',
      category: 'Architecture & Interior Design',
    },
    {
      company: "Uptown 6 October De...",
      logo:"https://peopleofthewoods.com/cdn/shop/products/POTW-removebg-preview_1_2048x.png?v=1667483984",
      location: 'Al-Sheikh Zayed, Egypt',
      title: 'Full Stack WordPress Developer',
      description: 'We are seeking a talented and experienced Full Stack WordPress Developer to join our team',
      daysAgo: 'a month ago',
      category: 'Architecture & Interior Design',
    },
    {
      company: "AZZAN ARBI",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOq509B61xcjpGD2eYd9JaQVZnQbONuHRU_Q&s",
      location: 'Islamabad, Pakistan',
      title: '3D VISUALIZER /interior designer',
      description: '3D VISUALIZER/interior designer',
      daysAgo: '14 days ago',
      category: 'Architecture & Interior Design',
    },
    {
      company: "kiran tandon",
      logo:"https://patexstudios.com/wp-content/uploads/2024/03/Frame-35496.png",
      location: 'New Delhi, India',
      title: 'Interior Designer',
      description: 'interior designer with 2-3 years required to work on luxurious residential projects',
      daysAgo: 'a month ago ',
      category: 'Architecture & Interior Design',
    },
    {
      company: "Design Talk",
      logo:"https://yt3.googleusercontent.com/D3-YknXnAkhgBEgLhTLE7X1iXLryaGaP8bX3HBfFr5n4zIEN_als3PzQJNsyFJXayu2HgjGUXAE=s900-c-k-c0x00ffffff-no-rj",
      location: 'India',
      title: 'Graphic Designer | Canva',
      description: 'we are looking for creative designer with advance canva designing skills.',
      daysAgo: '19 days ago ',
      category: 'Branding Services',
    },
    {
      company: "drumstick design",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeH0xau2EmmElTGSgJ_umzeV06tE9poKwiGWSA7T0cw-j8Z8C",
      location: 'Gurgaon, India',
      title: 'Senior Graphic designer',
      description: 'Looking for senior graphic designer.',
      daysAgo: '22 days ago ',
      category: 'Branding Services',
    },
    {
      company: "Bosscoder Academy",
      logo:"https://thumbs.dreamstime.com/z/three-way-direction-arrow-isometric-flat-icon-d-vector-colorful-illustration-pictogram-isolated-white-background-87961917.jpg",
      location: 'India',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '8 days ago',
      category: 'Branding Services',
    },
    {
      company: "WAYPOINT",
      logo:"https://protyon.tech/wp-content/uploads/2023/02/protyon-logo-1.svg",
      location: 'Argentina',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '25 days ago',
      category: 'Branding Services',
    },
    {
      company: "Mohit K",
      logo:"https://joi.studio/wp-content/uploads/2024/02/Mask-group.png",
      location: 'Kolkata, India',
      title: 'Fashion Designer',
      description: 'Create innovative kidswear designs using CAD.',
      daysAgo: '9 days ago',
      category: 'Branding Services',
    },
    {
      company: "Mohit K",
      logo:"https://joi.studio/wp-content/uploads/2024/02/Mask-group.png",
      location: 'Kolkata, India',
      title: 'Fashion Designer',
      description: 'Create innovative kidswear designs using CAD.',
      daysAgo: '9 days ago',
      category: 'Branding Services',
    },
    {
      company: "WAYPOINT",
      logo:"https://protyon.tech/wp-content/uploads/2023/02/protyon-logo-1.svg",
      location: 'Argentina',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '25 days ago',
      category: 'Branding Services',
    },
    {
      company: "WAYPOINT",
      logo:"https://protyon.tech/wp-content/uploads/2023/02/protyon-logo-1.svg",
      location: 'Argentina',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '25 days ago',
      category: 'Branding Services',
    },
    {
      company: "Bosscoder Academy",
      logo:"https://thumbs.dreamstime.com/z/three-way-direction-arrow-isometric-flat-icon-d-vector-colorful-illustration-pictogram-isolated-white-background-87961917.jpg",
      location: 'India',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '8 days ago',
      category: 'Branding Services',
    },
    {
      company: "Storysideup",
      logo:"https://cdn-icons-png.flaticon.com/512/9000/9000078.png",
      location: 'India',
      title: 'PR Manager',
      description: 'Looking for a passionate Fashion Enthusiast who have experience in International PR ',
      daysAgo: '18 days ago',
      category: 'Branding Services',
    },

    {
      company: "Option 1 Event Servic...",
      logo:"https://lafabriqueduneon.fr/wp-content/uploads/2024/05/Sans-titre-200-x-200-px-1.png",
      location: 'Pune,',
      title: 'India 3D Visualizer',
      description: '3D VISUALIZER',
      daysAgo: '8 days ago',
      category: 'Branding Services',
    },

    {
      company: "Design Talk",
      logo:"https://yt3.googleusercontent.com/D3-YknXnAkhgBEgLhTLE7X1iXLryaGaP8bX3HBfFr5n4zIEN_als3PzQJNsyFJXayu2HgjGUXAE=s900-c-k-c0x00ffffff-no-rj",
      location: 'India',
      title: 'Graphic Designer | Canva',
      description: 'we are looking for creative designer with advance canva designing skills.',
      daysAgo: '19 days ago ',
      category: 'Logo Design',
    },


    {
      company: "Vân Anh Phạm",
      logo:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQt4tUJGNsTi2E5iFLFpexahdC8yBGZEQlOxwrHDbB9EVq3I5_n",
      location: 'Bắc Ninh, Vietnam',
      title: 'Graphic Designer (Packaging/Printing, for Vietnamese Locals)',
      description: 'Nhân viên Thiết kế đồ họa mảng bao bì, in ấn',
      daysAgo: '24 days ago ',
      category: 'Logo Design',
    },


    {
      company: "Mohit K",
      logo:"https://joi.studio/wp-content/uploads/2024/02/Mask-group.png",
      location: 'Kolkata, India',
      title: 'Fashion Designer',
      description: 'Create innovative kidswear designs using CAD.',
      daysAgo: '9 days ago ',
      category: 'Logo Design',
    },


    {
      company: "WAYPOINT",
      logo:"https://protyon.tech/wp-content/uploads/2023/02/protyon-logo-1.svg",
      location: 'Argentina',
      title: 'Graphic Designer',
      description: 'We are looking for a talented Graphic Designer with an eye for detail',
      daysAgo: '25 days ago ',
      category: 'Logo Design',
    },


    {
      company: "D Dressfolk Private Limi...",
      logo:"https://pilulkacz.vshcdn.net/zoh4eiLi/IMG/86400/bwi9UZdOgBvG4jlqF6PW6J--tphYEPZoqY6BH900cO8/aHR0cHM6Ly9waWx1bGthLnMzLWNlbnRyYWwudnNob3N0aW5nLmNsb3VkL3BpbHVsa2EtY3ovZmlsZXMvaW1hZ2VzLzIwMjEtMDUvYTY4NzdkMGIyNThiYjdkNmY0ZjcwMDI4YmFlNDAzMWMuanBn.jpg",
      location: 'Gurgaon, India',
      title: 'Visual Communication Lead',
      description: 'Looking For The Next Jony Ive',
      daysAgo: 'a month ago ',
      category: 'Logo Design',
    },


    {
      company: "RRD",
      logo:"data:image/png;base64,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",
      location: 'Chennai, India',
      title: 'Visualisers',
      description: 'RRD Hiring Visualisers',
      daysAgo: '23 days ago ',
      category: 'Logo Design',
    },

    {
      company: "Jazba Curators LLP",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EB_Iulx-RdyTM5CwinDtrAZVJ8ODlg7VNQ&s",
      location: 'Baroda, India',
      title: 'Creative Designer',
      description: 'Creative Designer',
      daysAgo: '24 days ago ',
      category: 'Logo Design',
    },

    {
      company: "Dejavu Dubai",
      logo:"https://media.trustradius.com/product-logos/rR/PI/VQ2QQQXXC2TL-180x180.PNG",
      location: 'Dubai, United Arab Emirates',
      title: 'Dubai, United Arab Emirates',
      description: 'We are looking for an innovative and creative Art Director / Illustrator',
      daysAgo: '21 month ago ',
      category: 'Logo Design',
    },


    {
      company: "sofsy International",
      logo:"https://media.licdn.com/dms/image/v2/C560BAQHhyQzCG_86Ww/company-logo_200_200/company-logo_200_200/0/1643842076903/sofsy_logo?e=2147483647&v=beta&t=H5zYICtrlC7rem05NbSbzfOItvF7oZXPB8arF3UZWAo",
      location: 'Bangkok, Thailand',
      title: 'Junior Photo Retoucher',
      description: 'We are hiring a creative and passionate individual as a Junior Photo Retoucher.',
      daysAgo: '23 days ago ',
      category: 'Logo Design',
    },

    {
      company: "DEAI",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWwq5fcH3hQVJd8RMqXWQP6_kJhWuma3CbYZ_2rvtc_hq33PO79pIILJvcQrDYT9Pg5Q&usqp=CAU",
      location: 'Egypt',
      title: 'Finalizer Graphic Designer',
      description: 'Finalizer',
      daysAgo: '15 days ago ',
      category: 'Logo Design',
    },
    {
      company: "Pimpam Studio ",
      logo:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDQ2Zlg_Vkq6Ui8ukQYnsSMcDv2ZFMML1evTEx1UB534xqDau9",
      location: 'Ontinyent,Spain',
      title: 'Diseñador gráfico senior ',
      description: 'Senior Graphic Designer con más de 4 años de experiencia',
      daysAgo: '3 days ago',
      category: 'Branding Services',
    },

    {
      company: "Oval Atelier ",
      logo:"https://sharetribe.imgix.net/6022530a-b6ad-4d14-a85f-6062864d53ad/6261e007-5711-4711-8833-eabea30c83fc?auto=format&crop=edges&fit=crop&h=480&w=480&s=aec416e09c840fcedbe46007a77ac50b",
      location: 'India',
      title: 'Pro Create Intern ',
      description: 'We are looking for a Pro-Create Intern',
      daysAgo: '23 days ago',
      category: 'Illustrations',
    },
    {
      company: " Nexa Digital Web Des... ",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALjCi7vs-Ut30mvn5u4zNvOaFpUo0K7OYOiQ2MzmvPRlfxS5u",
      location: 'Anywhere',
      title: 'Video Editor (Remote role)',
      description: 'We are currently looking to urgently hire a Video Editor who would work remotely.',
      daysAgo: '8 days ago',
      category: 'Illustrations',
    },
    {
      company: "VIVA ",
      logo:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGGJ6kmfNt14OYO6XdBHyO6h9HJgNluwa5akVv7IGao1OoCjDz",
      location: 'Anywhere',
      title: 'Social Media Content Designer',
      description: '¡Buscamos a un Social Media Content Designer creativo y listo para unirse a VIVA! Visualisers',
      daysAgo: '22 days ago',
      category: 'Illustrations',
    },

    {
      company: "Nexa Digital Web Des...",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALjCi7vs-Ut30mvn5u4zNvOaFpUo0K7OYOiQ2MzmvPRlfxS5u",
      location: 'Anywhere',
      title: 'Video Editor (Remote role)',
      description: 'We are currently looking to urgently hire a Video Editor who would work remotely. ',
      daysAgo: '8 days ago',
      category: 'Illustrations',
    },
    {
      company: "Dressfolk Private Limi....",
      logo:"https://pilulkacz.vshcdn.net/zoh4eiLi/IMG/86400/bwi9UZdOgBvG4jlqF6PW6J--tphYEPZoqY6BH900cO8/aHR0cHM6Ly9waWx1bGthLnMzLWNlbnRyYWwudnNob3N0aW5nLmNsb3VkL3BpbHVsa2EtY3ovZmlsZXMvaW1hZ2VzLzIwMjEtMDUvYTY4NzdkMGIyNThiYjdkNmY0ZjcwMDI4YmFlNDAzMWMuanBn.jpg",
      location: 'Gurgaon',
      title: 'Video Editor (Remote role)',
      description: 'India Visual Communication Lead Looking For The Next Jony Ive. ',
      daysAgo: '23 days ago',
      category: 'Illustrations',
    },
    {
      company: "Snaptics Business So...",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdndY6StCg5xp0AZ41dZ4RUjnVveTjQtr8h2rZTKQm1lgT33t",
      location: 'India',
      title: 'Looking for UI/UX Designer',
      description: 'Looking for UI/UX designers. ',
      daysAgo: '9 days ago',
      category: 'Illustrations',
    },
    {
      company: "Juntrax Solutions",
      logo:"https://cdn.cutshort.io/public/socialshare-ogimage/id66cfabf08ac7600027164e15time1724886080082-og.jpg",
      location: 'India',
      title: 'UI/UX Designer',
      description: 'UI/UX Designer for B2B Product Company',
      daysAgo: '6 days ago',
      category: 'UI/UX Design',
    },
    {
      company: "Awesomic",
      logo:"https://techcos.co/wp-content/uploads/2024/06/awesomic.png",
      location: 'Anywhere',
      title: 'Senior UI/UX Designer',
      description: 'Looking for UI/UX Designer to tackle projects',
      daysAgo: '10 days ago',
      category: 'UI/UX Design',
    },
    {
      company: "azzans",
      logo:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAGKxXZVFxH6B3-LKTpLlH2onYhiXhu1oHDUvYFl_WjokARE8T",
      location: 'Pakistan',
      title: 'interior designer',
      description: 'interior designer visualizer',
      daysAgo: '14 days ago',
      category: 'Architecture & Interior Design',
    },
    {
      company: "Uptown 6 October De...",
      logo:"https://peopleofthewoods.com/cdn/shop/products/POTW-removebg-preview_1_2048x.png?v=1667483984",
      location: 'Al-Sheikh Zayed, Egypt',
      title: 'Full Stack WordPress Developer',
      description: 'We are seeking a talented and experienced Full Stack WordPress Developer to join our team',
      daysAgo: 'a month ago',
      category: 'Architecture & Interior Design',
    },
    {
      company: "AZZAN ARBI",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOq509B61xcjpGD2eYd9JaQVZnQbONuHRU_Q&s",
      location: 'Islamabad, Pakistan',
      title: '3D VISUALIZER /interior designer',
      description: '3D VISUALIZER/interior designer',
      daysAgo: '14 days ago',
      category: 'Architecture & Interior Design',
    },
    {
      company: "kiran tandon",
      logo:"https://patexstudios.com/wp-content/uploads/2024/03/Frame-35496.png",
      location: 'New Delhi, India',
      title: 'Interior Designer',
      description: 'interior designer with 2-3 years required to work on luxurious residential projects',
      daysAgo: 'a month ago ',
      category: 'Architecture & Interior Design',
    },
    {
      company: "Design Talk",
      logo:"https://yt3.googleusercontent.com/D3-YknXnAkhgBEgLhTLE7X1iXLryaGaP8bX3HBfFr5n4zIEN_als3PzQJNsyFJXayu2HgjGUXAE=s900-c-k-c0x00ffffff-no-rj",
      location: 'India',
      title: 'Graphic Designer | Canva',
      description: 'we are looking for creative designer with advance canva designing skills.',
      daysAgo: '19 days ago ',
      category: 'Branding Services',
    },
    {
      company: "drumstick design",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeH0xau2EmmElTGSgJ_umzeV06tE9poKwiGWSA7T0cw-j8Z8C",
      location: 'Gurgaon, India',
      title: 'Senior Graphic designer',
      description: 'Looking for senior graphic designer.',
      daysAgo: '22 days ago ',
      category: 'Branding Services',
    },
    {
      company: "Bosscoder Academy",
      logo:"https://thumbs.dreamstime.com/z/three-way-direction-arrow-isometric-flat-icon-d-vector-colorful-illustration-pictogram-isolated-white-background-87961917.jpg",
      location: 'India',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '8 days ago',
      category: 'Branding Services',
    },
    {
      company: "WAYPOINT",
      logo:"https://protyon.tech/wp-content/uploads/2023/02/protyon-logo-1.svg",
      location: 'Argentina',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '25 days ago',
      category: 'Branding Services',
    },
    {
      company: "Mohit K",
      logo:"https://joi.studio/wp-content/uploads/2024/02/Mask-group.png",
      location: 'Kolkata, India',
      title: 'Fashion Designer',
      description: 'Create innovative kidswear designs using CAD.',
      daysAgo: '9 days ago',
      category: 'Branding Services',
    },
    {
      company: "Mohit K",
      logo:"https://joi.studio/wp-content/uploads/2024/02/Mask-group.png",
      location: 'Kolkata, India',
      title: 'Fashion Designer',
      description: 'Create innovative kidswear designs using CAD.',
      daysAgo: '9 days ago',
      category: 'Branding Services',
    },
    {
      company: "WAYPOINT",
      logo:"https://protyon.tech/wp-content/uploads/2023/02/protyon-logo-1.svg",
      location: 'Argentina',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '25 days ago',
      category: 'Branding Services',
    },
    {
      company: "WAYPOINT",
      logo:"https://protyon.tech/wp-content/uploads/2023/02/protyon-logo-1.svg",
      location: 'Argentina',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '25 days ago',
      category: 'Branding Services',
    },
    {
      company: "Snaptics Business So...",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdndY6StCg5xp0AZ41dZ4RUjnVveTjQtr8h2rZTKQm1lgT33t",
      location: 'India',
      title: 'Looking for UI/UX Designer',
      description: 'Looking for UI/UX designers. ',
      daysAgo: '9 days ago',
      category: 'Illustrations',
    },
    {
      company: "Bosscoder Academy",
      logo:"https://thumbs.dreamstime.com/z/three-way-direction-arrow-isometric-flat-icon-d-vector-colorful-illustration-pictogram-isolated-white-background-87961917.jpg",
      location: 'India',
      title: 'Graphic Designer',
      description: 'We are looking for a Graphic Designer, who can join our office in Noida',
      daysAgo: '8 days ago',
      category: 'Branding Services',
    },


  ];



// const filteredJobListings = jobListings.filter((job) => {
//   const categoryMatches = selectedCategory === 'All' || job.category === selectedCategory;
//   const searchMatches =
//     job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     job.description.toLowerCase().includes(searchTerm.toLowerCase());

//   return categoryMatches && searchMatches;
// });
const filteredJobListings = jobListings.filter((job) => {
  if (selectedCategory !== 'All' && job.category !== selectedCategory) {
    return false;
  }

  return (
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) // Optional: add location search
  );
});


return (
  <div className="job_listings" style={{marginTop: '0px'}}>
    <div className="job_listings_header">
      <h2>Full-Time Jobs ({filteredJobListings.length})</h2>
      <div className="job_search">
        <input
          type="text"
          placeholder="Search Full-Time Jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>

    <div className="job_cards">
      {filteredJobListings.length > 0 ? (
        filteredJobListings.map((job, index) => (
          <div className="job_card" key={index}>
            <div className="job_company">
              <img src={job.logo} alt={`${job.company} logo`} className="jobcompany_logo" />
              <strong>{job.company}</strong>
            </div>
            <div className="job_location">
              <i className="fa-solid fa-location-dot" style={{ color: '#d0d3d7', marginRight: '5px' }}></i>
              <span>{job.location}</span>
            </div>
            <h3 className="job_title">{job.title}</h3>
            <p className="job_description">{job.description}</p>
            <span className="job_days_ago">{job.daysAgo}</span>
          </div>
        ))
      ) : (
        <p>No jobs found matching your search.</p>
      )}
    </div>
  </div>
);
};

export default JobListings;

