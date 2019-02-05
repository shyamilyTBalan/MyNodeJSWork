

import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Label, List,Icon, ListItem, Button, Left, Right, Body,CheckBox, StyleProvider, Form, Card, Picker, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import icoMoonConfig from '../../../selection.json';

const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const questionnaire = {
	"Professionalism": [{
			
			"label": " I've observed that"
		},
		{
			"label": " I've observed that"
		}
	],
	"Patient Care": [{

      "label": "I mention this because"
		},
		{
      "label": "I mention this because"
    },
    {
      "label": "I mention this because"
		}
	],
	"Team Work": [{
	
			"label": "One suggestion that I have"
		},
		{
		
			"label": "One suggestion that I have"
		}
	],

	"Attitude": [{
			
			"label": "I've observed that"
		},
		{
		
			"label": "One suggestion that I have"
		}
	],
	"Leadership": [{
			
			"label": "I've observed that"
		},
		{
		
			"label": "One suggestion that I have"
		}
	]

}
// var radio_props = [
//   {label: 'param1', value: 0 },
//   {label: 'param2', value: 1 }
// ];

export default class Feedback extends Component {

 
  
  updateUser = (qualities) => {
   
  this.setState({ qualities: qualities })
    
  }

  constructor(props) {
    super(props);
    this.state = {
      checkbox: false,
      stars: 5,
      qualities: "Professionalism"
      }



   
  
    
  }
  toggleSwitch() {
    this.setState({
      checkbox: !this.state.checkbox
    });
  }


  pickerValues = (val) => {
   
  
    if (this.state.qualities === "Professionalism" ) {
      return  val.map((data) =>{
      return (
       
      <View>
      <Row>
      <Label style={styles.labelstyle}>
      {data.label}</Label>
      </Row>
      <Row >
      <Content>
      <Item style={{borderRadius: 5, borderWidth: 1}}  regular>
         <Input style={styles.inputstyle} 
         multiline  />
       </Item>
      </Content>
        </Row>
        </View> )
     })
    }
    else  if (this.state.qualities === "Patient Care" ) {
      return (  
      <View>
         <Row>
         <Content>
         <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
      
      
         <RadioForm
          radio_props={val}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />
      </View>    
</Content>
           </Row>
         </View>)
    }
//     else  if (this.state.qualities === "Team Work" ) {
//       return  val.map((data) =>{
//       return ( 
      
//       <View>
//          <Row>
//          <Content>
//          <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
//          <CheckBox
//   center
//    color="#A7A9AC"
//   checked={this.state.checkbox}
//   onPress={() => this.toggleSwitch()}
// />

// <Text style={{ fontFamily:'avenir light', fontSize: 12, fontWeight: 'normal', marginLeft: 15 }}>{data.name}</Text>
//       </View>    
// </Content>
//            </Row>
//          </View> )
//       })
//     }
else if (this.state.qualities === "Team Work" ) {
  return  val.map((data) =>{
  return (
   
  <View>
  <Row>
  <Label style={styles.labelstyle}>
  {data.label}</Label>
  </Row>
  <Row >
  <Content>
  <Item style={{borderRadius: 5, borderWidth: 1}}  regular>
     <Input style={styles.inputstyle} 
     multiline  />
   </Item>
  </Content>
    </Row>
    </View> )
 })
}
else  if (this.state.qualities === "Attitude" ) {
  return (  
  <View>
     <Row>
     <Content>
     <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
  
  
     <RadioForm
      radio_props={val}
      initial={0}
      onPress={(value) => {this.setState({value:value})}}
    />
  </View>    
</Content>
       </Row>
     </View>)
}
else if (this.state.qualities === "Leadership" ) {
  return  val.map((data) =>{
  return (
   
  <View>
  <Row>
  <Label style={styles.labelstyle}>
  {data.label}</Label>
  </Row>
  <Row >
  <Content>
  <Item style={{borderRadius: 5, borderWidth: 1}}  regular>
     <Input style={styles.inputstyle} 
     multiline  />
   </Item>
  </Content>
    </Row>
    </View> )
 })
}
}

  render() {
   
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Left style={{ flex: 1 }}>
              <Button transparent>
                <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/Path1.png')} />
              </Button>
            </Left>
            <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Title style={{
                fontFamily: 'ARLRDBD', fontSize: 20, fontWeight: "bold",
                fontStyle: "normal",
              }}>Feedback</Title>
            </Body>
            <Right style={{ flex: 1 }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'ARLRDBD' }}>Done</Text>
            </Right>
          </Header>
          <Content>
            <List>
              <ListItem>
                <Grid >
                  <Col style={{ width: '35%' }}>
                    <Image style={{ maxWidth: '100%', maxHeight: '100%' }} source={require('../../../assets/images/bitmap3.png')} />
                  </Col>
                  <Col style={{ flexDirection: 'column', width: '65%', justifyContent: "flex-start", alignSelf: "flex-start" }}>
                    <Row>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 22, fontWeight: "500" }}>Jennifer Aniston </Text>
                    </Row>
                    <Row>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                      </View>
                    </Row>
                    <Row>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 16, fontWeight: 'normal' }}>EMT-Paramedic</Text>
                    </Row>
                    <Row>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 16, fontWeight: 'normal' }}>3 year experience</Text>
                    </Row>
                  </Col>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid>
                  <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'avenir light', fontSize: 16, fontWeight: "500" }}>Put your estimates</Text>
                  </Row>
                  <Row>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Professionalism</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                      </View>
                    </Right>
                  </Row>
                  <Row>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Patient Care</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                      </View>
                    </Right>
                  </Row>
                  <Row>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Team Work</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                      </View>
                    </Right>
                  </Row>
                  <Row>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Attitude</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                      </View>
                    </Right>
                  </Row>
                  <Row>
                    <Left>
                      <Text style={{ fontFamily: 'avenir light', fontSize: 15, fontWeight: "normal" }}>Leadership</Text>
                    </Left>
                    <Right>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                      </View>
                    </Right>
                  </Row>

                </Grid>
                </ListItem>
                <ListItem>
                <Grid>
              
                 
                <Row>
                  <View>
                    <Text style={{ fontFamily: 'avenir light', fontSize: 16, fontWeight: "500",textAlign: 'center', justifyContent: 'center' }}>
                    Leave a more detailed review on one of the proposed categories:</Text>
                   </View>
                  </Row>
               

              <Row style={{marginTop: 20}}>    
       
       <Container  style={styles.pickerContainer} >
       <View style={{ flex: 1, flexDirection: 'row'}}>
            <Picker   style={styles.picker}
            selectedValue = {this.state.qualities} onValueChange = {this.updateUser}>
            
            <Picker.Item label="Professionalism" value="Professionalism" key="0"/>
            <Picker.Item label="Patient Care" value="Patient Care" key="1"/>
            <Picker.Item label="Team Work" value="Team Work" key="2"/>
            <Picker.Item label="Attitude" value="Attitude" key="3"/>
            <Picker.Item label="Leadership" value="Leadership" key="4"/>
            </Picker>
          
            <Icon type='Entypo' name='chevron-small-down' size={5} style={{ color: "#CB9B41", marginTop: 10 }} />
         </View>
        </Container>
        
              </Row>

         
          
             
              { this.pickerValues(questionnaire[this.state.qualities])}

         <Row>
         <Content>
         <View style={{ flex: 1, flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
         <CheckBox
  center
   color="#A7A9AC"
  checked={this.state.checkbox}
  onPress={() => this.toggleSwitch()}
/>

<Text style={{ fontFamily:'avenir light', fontSize: 12, fontWeight: 'normal', marginLeft: 15 }}>This will only be visible to Jennifer Aniston</Text>
      </View>    
</Content>
           </Row>
         
         <Row>
           
           <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, styles.loginButton]}>
                                <Text style={styles.loginText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                       
           </Row>
         
                  </Grid>
              </ListItem>
            </List>
          </Content>
        </Container>
      </StyleProvider>
    )
  }


}

const styles = StyleSheet.create({

  buttonContainer: {
    width: '100%',
    height: '100%',
     marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
   
},
pickerContainer: {
  width: '100%',
  height: 50,
  backgroundColor: '#FDE5BE',
  borderWidth: 1,
  borderColor :'#CB9B41',
  borderRadius: 5,
  flexDirection: 'column',
  alignItems: 'center',
 
},
picker: {
  height: 40,
  flexDirection: 'row',
  backgroundColor: '#FDE5BE',
  borderRadius: 10,
  marginTop: 2,
   width: 100,
  },
  labelstyle: {
    fontFamily:'avenir light',
    fontSize: 14, 
    fontWeight: "500", 
    alignSelf: 'flex-start', 
    color: '#000000', 
    marginTop: 20
},
inputstyle: {
  fontFamily:'avenir light',
  fontSize: 14, 
  fontWeight: "normal",
  color: '#000000', 
  textAlignVertical: 'top',
 },
button: {
  height: 50,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: 200,
  borderRadius: 30,
},
loginButton: {
  backgroundColor: "#f7941d",
},
loginText: {
  color: 'white',
},

});