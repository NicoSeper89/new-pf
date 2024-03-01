import React from 'react'
import HomeScene from './HomeScene'
import AnimatedText from './AnimatedText'
import SVGIcon from '../../utils/SVGIcon'
import SocialMediaContainer from './SocialMediaContainer'

interface Props {

}

const Home:React.FC<Props> = () => {
  return (
    <>
        <HomeScene />
        <div className="relative flex flex-col justify-center left-24 bg-[#1f1f1f68] h-full p-8">
          <AnimatedText text="Hi!" />
          <AnimatedText text="I'm Nico" />
          <AnimatedText text="FullStack" />
          <AnimatedText text="Developer" />
        </div>        
        <SocialMediaContainer />
    </>
  )
}

export default Home;
