

const Aboutus = () => {
    return (
        <div >

            <div className="pb-5">
                <h2 className="text-2xl font-bold text-center">About Us: Embracing Harmony Through Yoga</h2>
                <p className="text-sm font-medium">Welcome to our vibrant community dedicated to the art and science of yoga. At our heart, we believe in the transformative power of yoga to heal, strengthen, and balance both body and mind. Our mission is to provide a nurturing space for individuals of all backgrounds and abilities to embark on their own journey towards holistic well-being.</p>
            </div>

            <div className="pb-5">
                <h2 className="text-2xl font-bold text-center">Our Philosophy</h2>
                <p className="text-sm font-medium">Yoga is more than a physical practice; it's a way of life. Rooted in ancient traditions, we embrace yoga as a holistic approach to health and self-discovery. We believe that through mindful movement, breathwork, meditation, and ethical living, one can attain a profound sense of harmony and inner peace.</p>
            </div>

            <div className="pb-5">
                <h2 className="text-2xl font-bold text-center">Experienced Instructors</h2>
                <p className="text-sm font-medium">Our dedicated instructors bring a wealth of knowledge and a deep passion for yoga to every class. They are certified, experienced, and committed to creating a supportive environment for all practitioners, from beginners to advanced yogis. Each session is thoughtfully designed to cater to diverse needs, ensuring a safe and enjoyable experience for everyone.</p>

                <div className=" gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                   
                    <div className="card w-[312px] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                className="relative inline-block h-24 w-24 rounded-2xl object-cover object-center"
                                alt="Image placeholder"
                                src="https://i.ibb.co/qRHPT45/jake-nackos-IF9-TK5-Uy-KI-unsplash.jpg"
                            />  </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Natalia</h2>
                            <p> My journey into yoga began in the misty Himalayas, where I studied under the guidance of enlightened masters. Through years of practice, I have honed my expertise in Vinyasa flow, Kundalini awakening, and mindfulness meditation.</p>

                        </div>
                    </div>

                    <div className="card w-[312px] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                className="relative inline-block h-24 w-24 rounded-2xl object-cover object-center"
                                alt="Image placeholder"
                                src="https://i.ibb.co/1rSMsDy/vicky-hladynets-C8-Ta0gw-Pb-Qg-unsplash.jpg"
                            />  </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">James</h2>
                            <p>With a background in martial arts, I infuse my teachings with a unique blend of strength, balance, and mindfulness. My classes are a fusion of dynamic Ashtanga sequences and Zen philosophy, designed to help you unleash your inner warrior and find stillness amidst chaos.</p>

                        </div>
                    </div>

                    <div className="card w-[312px] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                className="relative inline-block h-24 w-24 rounded-2xl object-cover object-center"
                                alt="Image placeholder"
                                src="https://i.ibb.co/5xFWRKP/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg"
                            />  </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Andrew</h2>
                            <p>Greetings, seekers of harmony! I am the Harmony Flow Whisperer, a passionate yoga instructor dedicated to guiding you through the graceful dance of movement and breath. </p>

                        </div>
                    </div>

                    


                </div>

            </div>

            <div className="pb-5">
                <h2 className="text-2xl font-bold text-center">Diverse Offerings</h2>
                <p className="text-sm font-medium">We offer a wide range of classes, from the gentle flow of Hatha yoga to the dynamic intensity of Vinyasa. Whether you're seeking relaxation, strength-building, flexibility, or a deeper spiritual connection, you'll find a class that resonates with your unique journey. Additionally, we offer specialized workshops, retreats, and one-on-one sessions to further deepen your practice.</p>
            </div>

            <div className="pb-5">
                <h2 className="text-2xl font-bold text-center">Inclusive Community</h2>
                <p className="text-sm font-medium">Our studio is a welcoming space for all, regardless of age, gender, race, or physical ability. We believe that yoga is for every body, and we strive to create an inclusive environment where everyone feels comfortable and supported. Our community is a source of inspiration, encouragement, and friendship for all who walk through our doors.</p>
            </div>

            <div className="pb-5">
                <h2 className="text-2xl font-bold text-center">Holistic Well-Being</h2>
                <p className="text-sm font-medium">Beyond the mat, we encourage our community to incorporate yoga principles into their daily lives. From mindful eating to conscious communication, we believe that yoga can positively influence all aspects of your life, leading to a more balanced and fulfilled existence.</p>
            </div>

            <div className="pb-5">
                <h2 className="text-2xl font-bold text-center">Come Join Us</h2>
                <p className="text-sm font-medium">We invite you to become a part of our vibrant yoga family. Whether you're a seasoned practitioner or stepping onto the mat for the first time, we welcome you with open hearts and open minds. Together, let's explore the boundless potential that yoga offers for a healthier, happier, and more harmonious life.</p>
            </div>

        </div>
    );
};

export default Aboutus;