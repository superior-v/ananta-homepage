import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <section className="bg-gray-100 p-8">
                    <h1 className="text-4xl font-bold text-center">Welcome to Ananta</h1>
                    <p className="mt-4 text-lg text-center">
                        Discover endless possibilities and explore our offerings.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;