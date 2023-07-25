import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Shadow } from 'react-native-shadow-2';

const ImageWithShadow = () => {
  const ImageSource = require('./path/to/your/image'); // Replace with your image source

  return (
    <Shadow startColor="#00000020" distance={10} radius={5} size={20}>
      <Image style={styles.imageStyles} source={ImageSource} />
    </Shadow>
  );
};







const FirstLoadScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  // Minimum loading time in milliseconds
  const minimumLoadingTime = 1500;

  useEffect(() => {
    // Load the custom font
    async function loadFont() {
      await Font.loadAsync({
        'CustomFont': require('./assets/one.ttf'), // Replace with the actual path to your custom font file
      });
      setIsLoading(false); // Set isLoading to false after the font is loaded
    }

    // Simulate a delay or any other logic before transitioning to the next screen
    const timer = setTimeout(() => {
      loadFont(); // Load the custom font after the minimum loading time
    }, minimumLoadingTime);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts before the minimum loading time
  }, []);

  if (isLoading) {
    return (
      <View>
        <Image source={require('./assets/pg1.jpg')} style={styles.loading} />
      </View>
    );
  }

  // Return the next screen/component you want to navigate to after the loading screen
  return <Disclaimer navigation={navigation} />;
};






  

 

const Disclaimer = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.Para1}>This app is in the beta stage of development at the moment and is <Text style={styles.Red}>not</Text> ready for public consumption!</Text> 
      <Text style={styles.Para2}>Do Not Use This App!</Text> 
      <Text style={styles.Para3}>Attention!</Text> 
      <Text style={styles.Para4}>This app will not teach you how to box!</Text> 
      <Text style={styles.Para5}>You can use this app without a punching bag, however you will get the best experience with one.</Text> 
      <Text style={styles.Para6}>You should warm up, stretch, wear hand wraps and boxing gloves!</Text> 
      <Text style={styles.Para7}>Stix&Stones Productions <Text style={styles.Red}>accepts no responsibility</Text> for any harm caused to the user, equipment, or those around the user while using this app.</Text> 
      <Text style={styles.Para8}>By entering the app you agree to these terms!</Text> 
      <TouchableOpacity onPress={handleButtonPress}>
        <Image style={styles.button} source={require('./assets/donotpress.jpg')} />
      </TouchableOpacity>
    </ScrollView>
  );
};
// this is the screen after the disclaimer 
const HomeScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('Instructions');
  };
  const handleButtonPress1 = () => {
    navigation.navigate('Artists');
  }
  return (
    <View style={styles.HomeScreen}>
      <Image source={require('./assets/pg3img1.jpg')} style={styles.home} />
      <Image source={require('./assets/instructions.png')} style={styles.home2} resizeMode="contain"/>
      <TouchableOpacity onPress={handleButtonPress} style={styles.touchHome}>
      <Image source={require('./assets/instructions1.png')} style={styles.home3} resizeMode="contain"/>
      </TouchableOpacity>
      <Image source={require('./assets/artists.png')} style={styles.home4} resizeMode="contain"/>
      <TouchableOpacity onPress={handleButtonPress1}  style={styles.artAndLeveltext1}><Image source={require('./assets/artists1.png')} style={styles.home5} resizeMode="contain"/></TouchableOpacity>
      <Image source={require('./assets/levels.png')} style={styles.home6} resizeMode="contain"/>
      <TouchableOpacity onPress={handleButtonPress} style={styles.artAndLeveltext1}><Image source={require('./assets/levels1.png')} style={styles.home7} resizeMode="contain"/></TouchableOpacity>
      
      </View>
    
  );
};
const Instructions = () => {

  return (
     <View style={styles.HomeScreen}>
      <ScrollView>
     <Image source={require('./assets/pg3img1.jpg')} style={styles.home} />
        <Text style={styles.pt1}>There will be videos here!</Text> 
        <Text style={styles.pt2}>Instructions</Text>
        <Text style={styles.pt3}>You will hit the bag eight times around. So whatever combination you’re on, there will be 8.</Text>
        <Text style={styles.pt4}>1) 8 straight left hands.</Text>
        <Text style={styles.pt5}>2) 8 straight left, straight right(1-2)</Text>
        <Text style={styles.pt6}>3) 8 1-2, left-hook</Text>
        <Text style={styles.pt7}>4) 8 1-2, left-hook, right-hook</Text>
        <Text style={styles.pt8}>9) 8 1-2, left-hook, right-hook, left-hook-to-the-body, right-hook-to-the-body</Text>
        <Text style={styles.pt9}>10) 8 1-2, left-hook, right-hook, left-hook-to-the-body, right-hook-to-the-body, left-hook, right-hook.</Text>
        </ScrollView>
    </View>
  

  )};

  const Artists = () => {

    const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('Ravin');
  }
    return (
      <View style={styles.HomeScreen}>
      <ScrollView>
       <Image source={require('./assets/artists1.png')} style={styles.artistsWriting} resizeMode="contain"/>
       <TouchableOpacity onPress={handleButtonPress} >
        <ShadowView>
          <Image source={require('./assets/peter-dobbins.jpg')} style={styles.peterDobbins} resizeMode="contain"/>
          </ShadowView>
          </TouchableOpacity>
       <TouchableOpacity><Image source={require('./assets/tp.jpg')} style={styles.tribalPulse} resizeMode="contain"/></TouchableOpacity>
          </ScrollView>
      </View>
       
  
    )};

    const Ravin = () => {

      const navigation = useNavigation();
    const handleButtonPress = () => {
      navigation.navigate('Ravin');
    }
      return (
        <LinearGradient // Use LinearGradient as the parent container
        colors={['#FF5722', '#FF9800']} // Set your desired gradient colors here
        style={styles.gradientContainer}
      ><View style={styles.HomeScreen}>
          <ScrollView>
         <Image source={require('./assets/peter-dobbins.jpg')} style={styles.peterDobbins} resizeMode="contain"/>
            </ScrollView>
        </View>
        </LinearGradient>
      
    
      )};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstLoad" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstLoad" component={FirstLoadScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Instructions" component={Instructions} />
        <Stack.Screen name="Artists" component={Artists} />
        <Stack.Screen name="Ravin" component={Ravin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};






const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
   
  },
 
  loading: {
    width: "100%",
    height: "100%",
  },
  // Disclaimer screen
  Para1: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 90,
    lineHeight: 50,
    marginHorizontal: 2,
  },
  // for red text on disclaimer screen
  Red: {
    color: "red",
  },
  Para2: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    lineHeight: 50,
    marginHorizontal: 2,
    textDecorationLine: "underline",
  },
  Para3: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    lineHeight: 50,
    marginHorizontal: 2,
    color: "red",
  },

  Para4: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    lineHeight: 50,
    marginHorizontal: 2,
  },
  Para5: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    lineHeight: 30,
    marginHorizontal: 2,
  },
  Para6: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    lineHeight: 30,
    marginHorizontal: 2,
  },
  Para7: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    lineHeight: 30,
    marginHorizontal: 2,
  },
  Para8: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    lineHeight: 30,
    marginHorizontal: 2,
  },

  button: {
    width: 140,
    height: 140,
    borderRadius: 100 ,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 60,
  },

  // This is all for the home screen where the user has the first options to select instructions artists and levels 
  HomeScreen: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    

  },
   // beat box img
  home: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: -150,
    borderRadius: 20,
  },
// instructions button bg
touchHome: {
  width: "100%",
  height: "100%",
  marginBottom: -1000,
},

// image at the top "beatbox image"
  home2: {
    width: "50%",
    height: "55%",
    aspectRatio: 1,
    alignSelf: 'center',
    
    
  },
  // instruvtions txt
  home3: {
    width: "80%",
    height: "55%",
    //aspectRatio: 1,
    alignSelf: 'center',
    marginTop: -450,
    
    
  },
  // artists bg
  home4: {
  width: "30%",
    height: "30%",
    aspectRatio: 1,
    alignSelf: 'center',
  },
  // artists text
  home5: {
    width: "23%",
      height: "23%",
      aspectRatio: 1,
      alignSelf: 'center',
      marginTop: -230
    },
    // levels bg
    home6: {
      width: "40%",
        height: "40%",
        aspectRatio: 1,
        alignSelf: 'center',
        marginTop: -885,
        marginLeft: 10,
      },
      // levels txt
      home7: {
        width: "18%",
          height: "18%",
          aspectRatio: 1,
          alignSelf: 'center',
          marginTop: -280,
        },

        // this is the instructions screen 
      pt1: {
          color: "white",
          marginTop: "50%",
          alignSelf: "center",
          fontSize: 30,
          },
      pt2: {
          color: "white",
          marginTop: "10%",
          alignSelf: "center",
          fontSize: 30,
          textDecorationLine: "underline",
          },
      pt3: {
          color: "white",
          marginTop: "10%",
          alignSelf: "center",
          fontSize: 30,
          },
      pt4: {
          color: "white",
          marginTop: "10%",
         
          fontSize: 30,
          },
      pt5: {
          color: "white",
          marginTop: "10%",
          
          fontSize: 30,
          },
      pt6: {
          color: "white",
          marginTop: "10%",
         
          fontSize: 30,
          },
      pt7: {
          color: "white",
          marginTop: "10%",
          
          fontSize: 30,
          },
      pt8: {
          color: "white",
          marginTop: "10%",
          
          fontSize: 30,
          },
      pt9: {
          color: "white",
          marginTop: "10%",
          fontSize: 30,
          },
          
// home button at the bottom and white splat
      psyHouse: {
        width: 110,
        height: 110,
        marginTop: -290,
        alignSelf: "center",
      },
      whiteSplat: {
        width: 300,
        alignSelf: "center",
        marginTop: -90,

      },

// the Aritist and Levels writing (Went funny when trying to apply the touchable opcaity)
      
       artAndLeveltext1: {
        width: "100%",
        height: "100%",
        
      },

      // this is for the Artists page
      
      artistsWriting: {
        width: 400,
        marginTop: 60,
        

      },  
      peterDobbins: {
        width: 300,
        height:270,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 40,
        
        
        
    
         
      },
      
      shadowContainer: {
        shadowColor: 'white',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 10,
        borderRadius: 10,
        overflow: 'hidden',
        width: '85%',
        height: '57%',
      },

      tribalPulse: {
        width: 350,
        height: 300,
        borderRadius: 10,
        alignSelf: 'center',
        marginLeft: 50,
        marginTop: 60,
        marginBottom: 50,
        
        
        
    

      },


      whiteSplatArtists: {
        width: 300,
        alignSelf: "center",
        marginTop: 1050,
        

      },  

      psyHouseArtists: {
        width: 110,
        height: 110,
        marginTop: -290,
        alignSelf: "center",

      },
      gradientContainer: {
        width: "100%",
        height: '100%',
        opacity: 0,
      },
      
      
});


export default App;
