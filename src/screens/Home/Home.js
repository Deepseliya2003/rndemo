import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'react-native-axios';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { toggleFavorite } from '../../redux/favoritesSlice';


const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
    const favoriteEvents = useSelector(state => state.favorites.favoriteEvents);

    const isFavorite = (eventId) => favoriteEvents.some(event => event.event_date_id === eventId);


  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.post(
        'http://3.7.81.243/projects/plie-api/public/api/events-listing',
      );
      console.log('API Response://////', response.data.data.events); // Debugging: Log API response
      setEvents(response.data.data.events); // Assuming events are in response.data.events
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#36C37E" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello Renzo!</Text>
      <Text style={styles.header1}>Are you ready to dance?</Text>
      <View style={styles.flatlistview}>
        <FlatList
          data={events}
          keyExtractor={item => Math.random().toString()}
          renderItem={({item, index}) => (
            <View style={styles.eventCard}>
              {item?.event_profile_img && (
                <Image
                  source={{uri: item.event_profile_img}}
                  style={styles.eventImage}
                />
              )}
              <View style={styles.eventDetails}>
                <View style={{alignSelf: 'flex-end'}}>
                  <Icon name="arrow-right" size={20} color="black" />
                </View>
                <Text style={styles.eventTitle}>{item.event_name}</Text>
                <View style={styles.dateview}>
                  <Text style={styles.eventDate}>
                    {item.readable_from_date +
                      (item.readable_to_date
                        ? ' - ' + item.readable_to_date
                        : '')}
                  </Text>
                  <Text style={styles.eventLocation}>
                    {item?.city + ', ' + item?.country}
                  </Text>
                </View>
                <Text style={styles.eventPrice}>
                  {'€' + item?.event_price_from + ' - €' + item?.event_price_to}
                </Text>
                <View style={styles.keywordmaincontainer}>
                  <View style={styles.keywordContainer}>
                    {item?.keywords?.map((keyword, index) => (
                      <View key={index} style={styles.keywordItem}>
                        <Text style={styles.keywordText}>{keyword}</Text>
                      </View>
                    ))}
                  </View>
                  <View style={styles.iconcontainer}>
                    <Icon name="share" size={20} />
                    <TouchableOpacity onPress={() => dispatch(toggleFavorite(item))}>
                <Text style={{ fontSize: 20 }}>{isFavorite(item.event_date_id) ? '💚' : '🤍'}</Text>
            </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  header1: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    color: 'gray',
  },
  flatlistview: {
    backgroundColor: '#f1f1f2',
    flex: 1,
    padding: 15,
  },
  dateview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 10,
  },
  eventCard: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  eventImage: {width: 80, height: 80, borderRadius: 10, marginRight: 10},
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    bottom: 10,
  },
  eventDate: {color: '#23c389'},
  eventPrice: {fontWeight: 'bold', bottom: 10},
  eventLocation: {color: '#777'},
  keywordmaincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  keywordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  keywordItem: {
    backgroundColor: '#f5f7fc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  keywordText: {
    fontSize: 14,
    color: '#333',
  },
  iconcontainer: {flexDirection: 'row', gap: 10},
});

export default Home;
