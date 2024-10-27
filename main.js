var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // نمایش 3 کارت
  spaceBetween: 1, // فضای بین کارت‌ها
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      400: {
      slidesPerView: 1, // در صفحه‌های کوچکتر 2 کارت نمایش داده می‌شود
      spaceBetween: 20,
      },
      640: {
      slidesPerView: 2, // در صفحه‌های کوچکتر 2 کارت نمایش داده می‌شود
      spaceBetween: 20,
      },
      768: {
      slidesPerView: 2, // در صفحه‌های بزرگتر 4 کارت نمایش داده می‌شود
      spaceBetween: 50,
      },
      1024: {
      slidesPerView: 3, // در صفحه‌های با عرض 1024 و بیشتر 3 کارت
      spaceBetween: 65,
      },
  },
  });


//   dynamic fetch functionality
const videoFrame = document.querySelector('.video-frame');
const adVideoContainer = document.querySelector('.video');
const shoesContainer = document.querySelector('.shoess');
const gallery = document.querySelector('.gallery');
const swiperWrapper = document.querySelector('.swiper-wrapper');

fetch('http://localhost:4000/media').
then(res => res.json()).
then(data => {
    data.banner.forEach(item => {
        if(item.type === 'video') {
            if(item.role === 'hero') {
                const video = document.createElement('video');
                video.src = item.src;
                video.autoplay = true;
                video.loop = true;
                video.muted = true;

                videoFrame.appendChild(video);
            } else if(item.role === 'advertisement') {
                const adVideo = document.createElement('video');
                adVideo.classList.add('orange-back');
                adVideo.src = item.src;
                adVideo.autoplay = true;
                adVideo.loop = true;
                adVideo.muted = true;

                adVideoContainer.appendChild(adVideo);
            }
        } else if(item.type === "image") {
            const img = document.createElement('img');
            img.classList.add('shoes');
            img.src = item.src;
            img.alt = item.alt;

            shoesContainer.appendChild(img);
        }
    });

    data.gallery.forEach(image => {
        const galleryImg = document.createElement('img');
        galleryImg.classList.add(image.class);
        galleryImg.src = image.src;
        galleryImg.alt = image.alt;

        gallery.appendChild(galleryImg);
    });

    data.products.forEach(product => {
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        const procuctImg = document.createElement('img');
        procuctImg.classList.add('images');
        procuctImg.src = product.src;
        procuctImg.alt = "";

        swiperSlide.appendChild(procuctImg);
        swiperWrapper.appendChild(swiperSlide);
    })

});

