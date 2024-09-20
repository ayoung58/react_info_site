function Body() {
    return (
        <div className='flex flex-col p-4'>
        <h1 className='text-3xl pb-3 pt-1 font-inter font-bold text-white'>Fun Facts About React</h1>
        <ul className = "list-disc pl-7 marker:text-light-blue text-white font-sofadi">
            <li>It was released in 2013</li>
            <li>First created by Jordan Walke</li>
            <li>Well over 100K stars on Github</li>
            <li>Is maintained by Facebook!</li>
        </ul>
        </div>
    )
}

export default Body;