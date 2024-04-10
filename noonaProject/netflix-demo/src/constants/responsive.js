//슬라이드 화면 비율

export const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1330 },
        items: 5,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet1: {
        breakpoint: { max: 1330, min: 1100 },
        items: 4,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet2: {
        breakpoint: { max: 1100, min: 890 },
        items: 4,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet3: {
        breakpoint: { max: 890, min: 650 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet4: {
        breakpoint: { max: 650, min: 550 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 550, min: 0 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    }
};