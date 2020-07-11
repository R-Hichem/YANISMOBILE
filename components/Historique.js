import React, {useState} from 'react';
import {
  View,
  Text,
  Container,
  Content,
  Header,
  ListItem,
  Left,
  Right,
  Button,
  Body,
} from 'native-base';
import {StyleSheet, ActivityIndicator} from 'react-native';

const Historique = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <Container>
      <Content>
        <Header style={styles.customheader}>
          <Text style={{color: 'white', fontSize: 22}}>Historique</Text>
        </Header>
        <Text style={{color: 'black', fontSize: 22}} />
        <HistoriqueItem repas="Pomme" date="22/07/2020 20h16" />
      </Content>
    </Container>
  );
};

const HistoriqueItem = ({repas, date}) => {
  return (
    <ListItem>
      <Left>
        <Text> {repas} </Text>
      </Left>
      <Body>
        <Text>{date}</Text>
      </Body>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  customheader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Historique;
