import { useState } from "react"
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons"

export const BannerSlides = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyles = {
        height: '100%',
        position: 'relative'
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#000',
        zIndex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#000',
        zIndex: 1,
        cursor: 'pointer'
    }

    const goToPrevious = () => {
        const isFIrstSlide = currentIndex === 0
        const newIndex = isFIrstSlide ? slides.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
    } 

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    } 

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} name='left' onClick={goToPrevious}><ArrowLeft/></div>
            <div style={rightArrowStyles} name='right' onClick={goToNext}><ArrowRight/></div>
            <div style={slideStyles}></div>
        </div>
    )
}