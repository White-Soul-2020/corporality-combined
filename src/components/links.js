import React from 'react'



function HomePage() {
    useEffect(() =>{
      AOS.init();
      document.title = "Home"
    }, []);
    return (
        <div>

        </div>
    );
}

export default HomePage;