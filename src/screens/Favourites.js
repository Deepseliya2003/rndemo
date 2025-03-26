import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

const Favourites = () => {
  const favoriteEvents = useSelector(state => state.favorites.favoriteEvents);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.event_profile_img}} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={{alignSelf: 'flex-end'}}>
          <Icon name="arrow-right" size={20} color="black" />
        </View>
        <Text style={styles.eventName}>{item.event_name}</Text>

        <View style={styles.dateview}>
          <Text style={styles.eventDate}>
            {item.readable_from_date +
              (item.readable_to_date ? ' - ' + item.readable_to_date : '')}
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
            <Text style={{fontSize: 20}}>{'💚'}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'white'}}>
        <Text style={styles.header}>Hello Renzo!</Text>
        <Text style={styles.header1}>Are you ready to dance?</Text>
      </View>
      <View style={styles.flatlistcontainer}>
        {favoriteEvents.length > 0 ? (
          <FlatList
            data={favoriteEvents}
            keyExtractor={item => item.event_id.toString()}
            renderItem={renderItem}
          />
        ) : (
          <Text style={styles.noEventsText}>No favorite events yet.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  header1: {
    paddingHorizontal: 20,
    color: 'gray',
    paddingBottom: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flatlistcontainer: {
    flex: 1,
    backgroundColor: '#f1f1f2',
    marginTop: 10,
    padding: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
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
  eventDate: {color: '#23c389'},
  eventPrice: {fontWeight: 'bold', bottom: 10},
  eventLocation: {color: '#777'},
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    bottom: 10,
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  noEventsText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
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

export default Favourites;
