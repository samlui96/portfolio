
function FlipCard({ path, title, cardArray }) {
  return (
    <div id={path} className="flex h-auto w-screen items-center justify-center  bg-neutral-800">
        <div className="inline-block gap-2 p-10">
          <div className="font-dmserif text-center text-3xl font-bold text-white p-10">
            {title}
          </div>
        {cardArray 
        ? 
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" >
          {cardArray.map((card, index) => {
            return (
              <div key={index} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-72">
                  {/* <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" /> */}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">{card.title}</h1>
                    <div className="h-40 mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className='flex flex-wrap gap-2 p-2'>
                      {(card.text).map((item, i) => {
                        return (
                        <span key={index+'.'+i} className="bg-gray-200 rounded text-black p-1">{item}</span>
                        )
                      })}
                      </div>
                    </div>
                  {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
                </div>
              </div>
            )
          })}
        </div>
        : (<div className="font-com text-2xl font-semibold text-white"> No Information Provided</div>)
        }
      </div>
    </div>
  );
}

export default FlipCard;
