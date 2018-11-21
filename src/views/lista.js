import React, { Component } from "react";
import { Text, View, SectionList, StyleSheet, ScrollView } from "react-native";
import api from "../services/api";
import ListaContent from "../components/Lista/ListasContent";
import ListaHeader from "../components/Lista/ListasHeader";
import Info from "../components/Lista/info";

Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

export default class Lista extends Component {
  state = {
    cards: [],
    refreshing: false
  };

  static navigationOptions = ({ navigation }) => {
    const props = navigation.getParam("itemId");
    return {
      title: "Voltar",
      headerStyle: {
        backgroundColor: props.backgroundColor
      }
    };
  };

  componentDidMount = () => {
    const id = this.props.navigation.getParam("itemId");
    const props = id.id;
    this.loadCards(props);
  };

  loadCards = async props => {
    const response = await api.get(
      `boards/${props}/lists?cards=open&card_fields=name&filter=open&fields=name`
    );

    const cards = response.data.map(card => ({
      title: card.name,
      data: card.cards
    }));

    this.setState({ cards });
  };

  render() {
    const Afazer = this.state.cards.filter(card => {
      return card.title === "A Fazer";
    });
    const concluidos = this.state.cards.filter(card => {
      return card.title === "Concluído";
    });
    const execucao = this.state.cards.filter(card => {
      return card.title === "Em Execução";
    });
    const getName = data => data.name;
    const getData = data => data.data.map(getName);

    const TotalAfazer = Afazer.flatMap(getData);
    const TotalConcluidos = concluidos.flatMap(getData);
    const TotalEmExecucao = execucao.flatMap(getData);

    const total = parseInt(TotalAfazer.length + TotalConcluidos.length);
    const final = parseInt(TotalConcluidos.length);

    const sum = final / total;
    const round = parseFloat(sum.toFixed(2));

    console.log(round);

    const params = this.props.navigation.getParam("itemId");
    return (
      <View style={{ flex: 1, marginBottom: 20 }}>
        <View
          style={[styles.header, { backgroundColor: params.backgroundColor }]}
        >
          <Info
            title={params.title}
            backgroundColor={params.backgroundColor}
            atividades={TotalAfazer.length}
            completos={TotalConcluidos.length}
            execucao={TotalEmExecucao.length}
            test={round}
          />
        </View>

        <SectionList
          renderItem={({ item, index, section }) => (
            <ListaContent name={item.name} key={index} title={section.title} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <ListaHeader title={title} />
          )}
          sections={this.state.cards}
          keyExtractor={(item, index) => item + index}
          removeClippedSubviews={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 200
  }
});
