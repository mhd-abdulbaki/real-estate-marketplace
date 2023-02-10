import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Carousel from "../../components/carousel/carousel"

const FlatId:NextPage = () => {

  const router = useRouter();
  const {flatId} = router.query;

  return (
    <div className='w-full h-full'>
      <Carousel closeBtn={false} />
    </div>
  )
}

export default FlatId