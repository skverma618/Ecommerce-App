const HomeSectionCard = () => {

    return (
        <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden
        w-[15rem] mx-3 border">
            <div className="h-[13rem] w-[10rem]">
                <img
                    src="https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/9177809/2023/7/14/98209aec-d03d-4c03-8c2d-c2eca9713c911689337715348-Armani-Exchange-Men-Watches-5081689337714987-1.jpg"
                    alt="" className="object-cover object-top w-full h-full"/>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">Title</h3>
                <p className="mt-2 text-sm text-gray-500">description is here only</p>
            </div>
        </div>

    )
}

export default HomeSectionCard;