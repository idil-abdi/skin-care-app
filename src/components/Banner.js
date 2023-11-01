import { BannerSlides } from '../components/BannerSlides'

export const Banner = () => {
    const slides = [
        {url: 'https://pyxis.nymag.com/v1/imgs/f63/3b0/4d1ef0e3508a40a92b928f298fc3611ed8-02-Skincare-Routine.2x.h473.w710.jpg', title: 'image one' },
        {url: "https://aromantic.co.uk/cdn/shop/articles/shutterstock_486713719_1000x_1fae8d4b-11a1-4890-a791-8268522a6c69.jpg?v=1654056377", title: 'image two' },
        {url: "https://www.tecnovaglobal.com/wp-content/uploads/2021/11/personal-care-industry.jpg", title: 'image three' }
    ];
    const containerStyle = {
        width: '100%',
        height: '550px',
        margin: '0 auto'
    };
    return (
        <div style={containerStyle}><BannerSlides slides={slides}/></div>
    )
}