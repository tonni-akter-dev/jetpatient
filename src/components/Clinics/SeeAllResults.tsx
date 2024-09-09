
import Pagination from '../Pagination/Pagination';
import AllResultSingleCard from './AllResultSingleCard';


const SeeAllResults = () => {
    return (
        <>
            <h2 className='text-[24px] text-[#1e1f26] leading-[36px] font-semibold mx-[20px] mt-5 mb-4 '>See All Results</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-[60px] gap-y-[34px] mb-[32px]">

                <AllResultSingleCard />
                <AllResultSingleCard />
                <AllResultSingleCard />
                <AllResultSingleCard />
                <AllResultSingleCard />
                <AllResultSingleCard />

            </div>
            {/* <Pagination /> */}
        </  >
    )
}

export default SeeAllResults