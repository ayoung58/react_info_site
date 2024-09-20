function Header() {
    return (
        <nav className="flex justify-between items-center p-4 shadow-md bg-mid-gray">
            <div className="flex gap-1">
                <img src="./react_logo.png" className='w-auto' />
                <h4 className="text-light-blue font-bold font-serif">ReactFacts</h4>
            </div>
            <ul className = "flex list-none text-white">
                <li className='p-2.5'>Pricing</li>
                <li className='p-2.5'>About</li>
                <li className='p-2.5'>Contact</li>
            </ul>
        </nav>
    )   
}

export default Header;