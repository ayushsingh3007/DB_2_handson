const store=require('express').Router()

 
const data=
[
    {
        "id": 1,
        "Name": 'Sumsung TV',
        "des":'Samsung 108 cm (43 inches) Crystal iSmart 4K Ultra HD Smart LED TV (UA43CUE60AKLXL, Black) | HDR 10+ | Screen mirroring',
        "price": '26',
        "image": 'https://5.imimg.com/data5/PP/LB/MY-53726935/samsung-led-tv.jpg',
        "cat": 'tv',
        "type": 'new',
        "qty":0
    },
    {
        "id":2,
        "Name":'Zebronics',
        "des":'ZEBRONICS AC32FHD LED Curved 75Hz 80Cm (32") (81.28 Cm) 1920x1080 Pixels FHD',
        "price":"34",
        "image":"https://images-eu.ssl-images-amazon.com/images/I/61iDFoORR6L._AC_UL600_SR600,600_.jpg",
        "cat":'tv',
        "type":'new',
        "qty":0
    },
    {
        "id": 3,
        "Name": 'Apple TV',
        "des":'VW 80 cm (32 inches) Frameless Series HD Ready LED TV (VW32A, Black) | (A+ Grade Panel | With IPE Technology)',
        "price": '26',
        "image": 'https://www.apple.com/newsroom/images/product/tv/standard/Apple-TV-4K-hero-221018_big.jpg.large.jpg',
        "cat": 'tv',
        "type": 'new',
        "qty":0
    },
   
    {
        "id": 4,
        "Name": 'UV TV',
        "des":'VW 80 cm (32 inches) Frameless Series HD Ready LED TV (VW32A, Black) | (A+ Grade Panel | With IPE Technology)',
        "price": '26',
        "image": 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71ecEh2Q4ZL._SL1500_.jpg',
        "cat": 'tv',
        "type": 'new',
        "qty":0
    },
    {
        "id": 5,
        "Name": 'acer',
        "des":'Acer 80 cm (32 inches) I Series HD Ready Android Smart LED TV (AR32AR2841HDFL, Black) | Dolby Audio | HDR10+',
        "price": '26',
        "image": 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/712am1RDNiL._SL1500_.jpg',
        "cat": 'tv',
        "type": 'new',
        "qty":0
    },
    {
        "id": 6,
        "Name": 'UV TV',
        "des":'Vu 108 cm (43 inches) Premium Series 4K Ultra HD Smart LED Google TV 43CA (Black)',
        "price": '26',
        "image": 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRd8LXwjUdW8iDMc6YlSugpw7AE3ouJDi2JrmQ9QnjfywgQRsVv_oLYdtSVu3naJKLmpD75S4R2dAEW14QTbm3tknc0axWGE7x9ikB0sG3JnVsfDYCAAuJ8OA',
        "cat": 'tv',
        "type": 'new',
        "qty":0
    },
    {
        "id": 7,
        "Name": 'one Plus',
        "des":'OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV (43Y1S Pro, Black) | Dolby Audio | HDR10+ HDR10, HLG',
        "price": '26',
        "image": 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/819SRH2DKBL._SL1500_.jpg',
        "cat": 'tv',
        "type": 'new',
        "qty":0
    },
    {
        "id": 8,
        "Name": 'Redmi',
        "des":'Redmi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV (L32R8-FVIN, Black) | Dolby Audio, DTS - HD | With Alexa Remote',
        "price": '26',
        "image": 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/819Lw2PE8tL._SL1500_.jpg',
        "cat": 'tv',
        "type": 'new',
        "qty":0
    },
    
   
    
    
    {
        "id":9,
        "Name": 'Intex',
        "des":'Lenovo LOQ 13th Gen, 39.62cms - Intel i7 (Storm Grey)',
        "price": '96',
        "image": 'https://5.imimg.com/data5/IJ/NO/ZR/SELLER-3066699/ned-dell-xps-13-laptop.jpg',
        "cat": 'laptop',
        "type": 'new',
        "qty":0
    },
    {
        "id": 10,
        "Name": 'Lenovo',
        "des":'Lenovo LOQ 13th Gen, 39.62cms - Intel i7 (Storm Grey)',
        "price": '96',
        "image": 'https://www.shutterstock.com/image-photo/jakartaindonesia-wednesday-14-august-2019-260nw-1791315848.jpg',
        "cat": 'laptop',
        "type": 'new',
        "qty":0
    },
    {
        "id": 11,
        "Name": 'HP',
        "des":'HP Victus Gaming Laptop,12th Gen Intel Core i5-12450H,NVIDIA RTX 3050 GPU,15.6-inch ',
        "price": '96',
        "image": 'https://www.shutterstock.com/image-photo/bangkok-thailand-hp-launch-new-260nw-2126914553.jpg',
        "cat": 'laptop',
        "type": 'new',
        "qty":0
    },
    {
        "id": 12,
        "Name": 'Apple laptop',
        "des":'https://media.istockphoto.com/id/1074074468/photo/apple-macbook-air-2018-in-review.jpg?s=612x612&w=0&k=20&c=kQksBR-NxIht7EpvmVIJNuqlKLsRc_fFTzYQT8EkwjA=',
        "price": '96',
        "image": 'https://www.shutterstock.com/image-photo/bangkok-thailand-hp-launch-new-260nw-2126914553.jpg',
        "cat": 'laptop',
        "type": 'new',
        "qty":0
    },
    {
        "id": 13,
        "Name": 'Acer laptop',
        "des":'Acer Aspire 7 Gaming Laptop 12th Gen Intel Core i5 (Windows 11 Home/16 (2*8) GB/512 GB SSD/NVIDIA GeForce RTX 3050/144 Hz) A715-76G with (39.6 cm) (15.6") FHD Display, Charcoal Black, 2.1 KG',
        "price": '96',
        "image": 'https://static-ecapac.acer.com/media/catalog/product/a/7/a715-76g_nh.qmfsi.002_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500',
        "cat": 'laptop',
        "type": 'new',
        "qty":0
    },
    {
        "id": 14,
        "Name": 'Sumsung laptop',
        "des":'Samsung Galaxy Book2 (NP750) Intel 12th Gen core i5 39.6cm (15.6") FHD Thin & Light Laptop ',
        "price": '96',
        "image": 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41o33bhM6YL._SX300_SY300_QL70_FMwebp_.jpg',
        "cat": 'laptop',
        "type": 'new',
        "qty":0
    },
    {
        "id": 15,
        "Name": 'ASUS',
        "des":'ASUS [SmartChoice] Vivobook 15, Intel Celeron N4020, 15.6" (39.62 cms) HD, Thin and Light Laptop (8GB/512GB',
        "price": '96',
        "image": 'https://www.shutterstock.com/image-photo/bangkok-thailand-hp-launch-new-260nw-2126914553.jpg',
        "cat": 'laptop',
        "type": 'new',
        "qty":0
    },
    {
        "id": 16,
        "Name": 'Xiaomi',
        "des":'Xiaomi Notebook Ultra Max 11th Gen Intel Core i5-11320H Thin & Light',
        "price": '96',
        "image": 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/710aJMxsUXL._SL1500_.jpg',
        "cat": 'laptop',
        "type": 'new',
        "qty":0
    },
    {
        "id": 17,
        "Name": 'Sony headphone',
        "des":'Sony WH-XB910N Extra BASS Noise Cancellation Headphones Wireless Bluetooth Over The Ear Headset with Mic',
        "price": '96',
        "image": 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61kqkYoeysL._SL1500_.jpg',
        "cat": 'headphone',
        "type": 'new',
        "qty":0
    },
    {
        "id": 18,
        "Name":'ZEBRONICS',
        "des":'Thunder 60 hrs Playback time Bluetooth Wireless Headphone with FM, mSD, Playback with Mic (Blue)',
        "price": '96',
        "image": 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41IpSXHdTHL._SX300_SY300_QL70_FMwebp_.jpg',
        "cat": 'headphone',
        "type": 'new',
        "qty":0
    },

    {
        "id": 19,
       "Name": 'OneOdio',
        "des":'OneOdio Pro-10 Over Ear Headphone, Wired Bass Headsets with 50mm Driver, Foldable Lightweight Headphones with Shareport and Mic for Recording Monitoring Podcast Guitar PC TV (red)',
        "price": '236',
        "image": 'https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg',
        "cat": 'headphone',
        "type": 'new',
        "qty":0
    },
    {
        "id": 20,
        "Name": 'Headphone',
        "des":'Over Ear Headphone, Wired Bass Headsets with 50mm Driver, Foldable Lightweight Headphones with Shareport and Mic for Recording ',
        "price": '636',
        "image": 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "cat": 'headphone',
        "type": 'new',
        "qty":0
    },
    {
        "id": 21,
        "Name": 'Cosmic Byte',
        "des":'Cosmic Byte Over the Ear Headphone with Mic & LED - G4000 Edition (Red)',
        "price": '98',
        "image": 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/516Me50yUlL._SX300_SY300_QL70_FMwebp_.jpg',
        "cat": 'headphone',
        "type": 'featured',
        "qty":0
    },
    {
        "id": 22,
        "Name": 'Redmi',
        "des":' headset electronics technology. AI generated Image by rawpixel.',
        "price": '98',
        "image": 'https://images.rawpixel.com/image_png_500/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yN18zZF9pbGx1c3RyYXRpb25fb2ZfYV9oZWFkcGhvbmVfY3V0ZV9jYXJ0b29uX181ZmNkYzU2My00ZGJhLTQ1MzEtODJlYy01YmY3ZjRmY2UyZmIucG5n.png',
        "cat": 'headphone',
        "type": 'featured',
        "qty":0
    },
    {
        "id": 23,
        "Name": 'Mi ',
        "des":'Cosmic Byte Over the Ear Headphone with Mic & LED - G4000 Edition (Red)',
        "price": '98',
        "image": 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/516Me50yUlL._SX300_SY300_QL70_FMwebp_.jpg',
        "cat": 'headphone',
        "type": 'featured',
        "qty":0
    },
    {
        "id": 24,
        "Name": 'Sumsung',
        "des":' Over the Ear Headphone with Mic & LED - G4000 Edition (Red)',
        "price": '98',
        "image": 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTM2NDQyOC1pbWFnZS1rd3Z4eGV6Zy5qcGc.jpg',
        "cat": 'headphone',
        "type": 'featured',
        "qty":0
    },
    {
        "id": 25,
        "Name": 'Camera',
        "des":'Two hands holding a black video camera. On the camera monitor is a forest with fall tones. The background of the actual image is blurred.',
        "price": '59',
        "image": 'https://media.istockphoto.com/id/618066222/photo/camera-capturing-a-forest.jpg?s=1024x1024&w=is&k=20&c=Uczlfi3iN08GnKzSq81d6lISYqttMUdnrR1b1JEcNws=',
        "cat": 'electronic',
        "type": 'featured',
        "qty":0
    },
    {
        "id": 26,
        "Name": 'Camera',
        "des":'Two hands holding a black video camera. On the camera monitor is a forest with fall tones. The background of the actual image is blurred.',
        "price": '59',
        "image": 'https://media.istockphoto.com/id/1182967559/photo/holding-a-dslr-camera-and-taking-a-picture-during-fall-autumn-season.jpg?s=1024x1024&w=is&k=20&c=s--WZ9ipFJwzinfZwH1Dr2G-wAIRQB81h-HPOicyyo0=',
        "cat": 'electronic',
        "type": 'featured',
        "qty":0
    },
    {
        "id": 27,
        "Name": 'Camera',
        "des":'Two hands holding a black video camera. On the camera monitor is a forest with fall tones. The background of the actual image is blurred.',
        "price": '59',
        "image": 'https://media.istockphoto.com/id/1214741982/photo/lifestyle-photo.jpg?s=1024x1024&w=is&k=20&c=bDJpjZ4pLLK-AVyyNTdyP2kB1DbT1kY1sqUqz_jnomU=',
        "cat": 'electronic',
        "type": 'featured',
        "qty":0
    },
    {
        "id": 28,
        "Name": 'Camera',
        "des":'Two hands holding a black video camera. On the camera monitor is a forest with fall tones. The background of the actual image is blurred.',
        "price": '59',
        "image": 'https://media.istockphoto.com/id/1130142078/photo/man-taking-an-urban-scene-image-personal-perspective-view.jpg?s=1024x1024&w=is&k=20&c=vZHn0k_2jiJxgU7kGIuT1QJ-3x9Ftku_VOlojGwoVdo=',
        "cat": 'electronic',
        "type": 'featured',
        "qty":0
    },
    
    {
        "id": 29,
        "Name": 'iPhone',
        "des":'Apple iPhone 14 Pro 128 GB, Deep Purple',
        "price": '389',
        "image": 'https://www.reliancedigital.in/medias/iPhone-14-Pro-Deep-Purple-PDP-Image-493177782-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjk4MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDAyLzEwMDE2OTIyMTczNDcwLmpwZ3xmNTU5ZTAwMzRmYmU5MWU2ODIzMjU5NjEwNTc3NjI1YWJkMjU2OGYxZDllNWM4ZmE3NTkxZGFlMzk5YmQyNTQ1',
        "cat": 'phone',
        "type": 'featured',
        "qty":0
    },
    {
        "id": 30,
        "Name": 'Vivo',
        "des":'Vivo V29e 5G (Artistic RED,128) (8 GB RAM)',
        "price": '67',
        "image": 'https://www.reliancedigital.in/medias/Vivo-V16-Smart-Phone-493177665-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjA2MTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDQxL2gyNC85OTE5MjYxMTQ3MTY2LmpwZ3wzYmE0YjQyMmY5Y2NlZTY1ZWMzNDgzYzM5NWU2MmI5M2RkMGVkMTM3NDdhODQwOTg4NmQ2YmM4OWQ5ZDVlMDgy',
        "cat": 'phone',
        "type": 'top',
        "qty":0
    },
    {
        "id": 31,
        "Name": 'Sumsung',
        "des":'Samsung Galaxy M34 5G (Waterfall Blue,8GB,128GB)|120Hz',
        "price": '76',
        "image": 'https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$',
        "cat": 'phone',
        "type": 'top',
        "qty":0
    },
    {
        "id": 32,
        "Name": 'OppO',
        "des":'Oppo A79 5G (Mystery Black, 8GB RAM, 128GB Storage)',
        "price": '87',
        "image": 'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno10-pro-plus-5g-en/listpage/reno10-pro-plus-5g-427_600-purple.png.thumb.webp',
        "cat": 'phone',
        "type": 'top',
        "qty":0
    },
    {
        "id": 33,
        "Name": 'One Plue',
        "des":'Oneplus Nord CE 3 5G (Grey Shimmer, 8GB RAM, 128GB Storage)',
        "price": '807',
        "image": 'https://www.jiomart.com/images/product/original/493665043/oneplus-11-5g-128-gb-8-gb-ram-eternal-green-mobile-phone-digital-o493665043-p598159012-0-202302081816.jpeg?im=Resize=(420,420)',
        "cat": 'phone',
        "type": 'top',
        "qty":0
    },
    {
        "id": 34,
        "Name": 'OppO',
        "des":'Oppo A79 5G (Mystery Black, 8GB RAM, 128GB Storage)',
        "price": '87',
        "image": 'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno10-pro-plus-5g-en/listpage/reno10-pro-plus-5g-427_600-purple.png.thumb.webp',
        "cat": 'phone',
        "type": 'top',
        "qty":0
    },
    {
        "id": 35,
        "Name": 'Camera',
        "price": '807',
        "image": 'https://www.jiomart.com/images/product/original/493665043/oneplus-11-5g-128-gb-8-gb-ram-eternal-green-mobile-phone-digital-o493665043-p598159012-0-202302081816.jpeg?im=Resize=(420,420)',
        "cat": 'electronics',
        "type": 'top',
        "qty":0
    },
    {
        "id": 36,
        "Name": 'headphones',
        "price": '807',
        "image": 'https://www.jiomart.com/images/product/original/493665043/oneplus-11-5g-128-gb-8-gb-ram-eternal-green-mobile-phone-digital-o493665043-p598159012-0-202302081816.jpeg?im=Resize=(420,420)',
        "cat": 'electronics',
        "type": 'top',
        "qty":0
    },
    {
        "id": 37,
        "Name": 'One Plue',
        "price": '807',
        "image": 'https://www.jiomart.com/images/product/original/493665043/oneplus-11-5g-128-gb-8-gb-ram-eternal-green-mobile-phone-digital-o493665043-p598159012-0-202302081816.jpeg?im=Resize=(420,420)',
        "cat": 'electronics',
        "type": 'top',
        "qty":0
    },
    {
        "id": 38,
        "Name": 'One Plue',
        "price": '807',
        "image": 'https://www.jiomart.com/images/product/original/493665043/oneplus-11-5g-128-gb-8-gb-ram-eternal-green-mobile-phone-digital-o493665043-p598159012-0-202302081816.jpeg?im=Resize=(420,420)',
        "cat": 'electronics',
        "type": 'top',
        "qty":0
    },
    {
        "id": 39,
        "Name": 'One Plue',
        "price": '807',
        "image": 'https://www.jiomart.com/images/product/original/493665043/oneplus-11-5g-128-gb-8-gb-ram-eternal-green-mobile-phone-digital-o493665043-p598159012-0-202302081816.jpeg?im=Resize=(420,420)',
        "cat": 'electronics',
        "type": 'top',
        "qty":0
    },
    {
        "id": 40,
        "Name": 'Smart Watch',
        "price": '807',
        "image": 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D)',
        "cat": 'watch',
        "type": 'top',
        "qty":0
    },
    {
        "id": 41,
        "Name": 'Watch',
        "price": '807',
        "image": 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61ZjlBOp+rL.jpg',
        "cat": 'watch',
        "type": 'top',
        "qty":0
    },
    {
        "id": 42,
        "Name": 'Watch',
        "price": '807',
        "image": 'https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg',
        "cat": 'watch',
        "type": 'top',
        "qty":0
    },
    {
        "id": 43,
        "Name": 'Smart Watch',
        "price": '807',
        "image": 'https://cdn.wareable.com/assets/images/86-apple-watch-wearable-technology-features-10-best-smartwatches-for-iphone-and-apple-watch-alternatives-non-imported-image3-kb8yagds0x.jpg',
        "cat": 'watch',
        "type": 'top',
        "qty":0
    },
    {
        "id": 44,
        "Name": 'Watch',
        "price": '807',
        "image": 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41FGDK5TVJL._SX300_SY300_QL70_FMwebp_.jpg',
        "cat": 'watch',
        "type": 'top',
    },
    {
        "id": 45,
        "Name": 'One Plue',
        "price": '807',
        "image": 'https://www.jiomart.com/images/product/original/493665043/oneplus-11-5g-128-gb-8-gb-ram-eternal-green-mobile-phone-digital-o493665043-p598159012-0-202302081816.jpeg?im=Resize=(420,420)',
        "cat": 'electronics',
        "type": 'top',
        "qty":0
    }
]

store.get('/store',(req,res)=>{
    res.json(data)
})
module.exports=store;