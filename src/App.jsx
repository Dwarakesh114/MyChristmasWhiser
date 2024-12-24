import React, { useState, useEffect } from 'react';
    import CountdownTimer from './components/CountdownTimer';
    import FireworkContainer from './components/FireworkContainer';
    import SnowEffect from './components/SnowEffect';
    import Mountains from './components/Scenery/Mountains';
    import Trees from './components/Scenery/Trees';
    import GreetingCard from './components/GreetingCard/GreetingCard';
    import { auth, googleProvider } from './firebase.config';
    import { signInWithPopup, signOut } from 'firebase/auth';
    import './styles/fireworks.css';
    import './styles/snow.css';
    import './index.css';
    
    export default function App() {
      const [user, setUser] = useState(null);
      const [showCard, setShowCard] = useState(false);
      const [isComplete, setIsComplete] = useState(false);
    
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setUser(user);
        });
        return () => unsubscribe();
      }, []);
    
      const handleSignIn = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
        } catch (error) {
          console.error("Error signing in with Google", error);
        }
      };
    
      const handleSignOut = async () => {
        try {
          await signOut(auth);
        } catch (error) {
          console.error("Error signing out", error);
        }
      };
    
      const christmas = new Date(2024, 11, 25);
    
      const handleCountdownComplete = () => {
        setIsComplete(true);
      };
    
      const handleCloseCard = () => {
        setShowCard(false);
      };
    
      return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 flex flex-col items-center justify-center relative overflow-hidden">
          <FireworkContainer />
          <SnowEffect />
          <Mountains />
          <Trees />
          
          <div className="text-center z-10 bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl max-w-4xl w-11/12">
            <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-8 filter drop-shadow-lg">
              Christmas Countdown 2024
            </h1>
            
            {user ? (
              <>
                <CountdownTimer targetDate={christmas} onComplete={handleCountdownComplete} />
                <div className="mt-8 text-white text-lg md:text-xl">
                  <p className="mb-2">🎄 Get ready for the magic of Christmas! 🎄</p>
                  <p>Time to spread joy and cheer!</p>
                  <button 
                    onClick={() => setShowCard(true)}
                    className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Preview Card
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-8 text-white text-lg md:text-xl">
                <p className="mb-2">Please sign in to view the countdown.</p>
                <button
                  onClick={handleSignIn}
                  className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign In with Google
                </button>
              </div>
            )}
          </div>
          {(showCard || isComplete) && <GreetingCard user={user} onClose={handleCloseCard} />}
        </div>
      );
    }
