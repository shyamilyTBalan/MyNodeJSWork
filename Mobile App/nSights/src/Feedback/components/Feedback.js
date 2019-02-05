import React, { Component } from 'react';
import { Container, Header, Title, Text, Content, Input, Thumbnail, Item, Label, List,Icon, ListItem, Button, Left, Right, Body,CheckBox, StyleProvider, Form, Card, Picker, CardItem } from 'native-base';
import { Platform, StyleSheet, ScrollView, TextInput, Image, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';

const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const questionnaire = {
	"Professionalism": [{
			"id": 1,
			"name": " I've observed that"
		},
		{
			"id": 1,
			"name": " I've observed that"
		}
	],
	"Patient Care": [{
			"id": 1,
			"name": "I mention this because"
		},
		{
			"id": 2,
			"name": "I mention this because"
		}
	],
	"Team Work": [{
			"id": 1,
			"name": "One suggestion that I have"
		},
		{
			"id": 2,
			"name": "One suggestion that I have"
		}
	],

	"Attitude": [{
			"id": 1,
			"name": "ckj lsfjk fbjkl"
		},
		{
			"id": 2,
			"name": "ckj lsfjk fbjkl"
		}
	],
	"Leadership": [{
			"id": 1,
			"name": "fdysilgf frduagio"
		},
		{
			"id": 2,
			"name": "fdysilgf frduagio"
		}
	]

}

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


  generateStars = () => {
    var stars = this.state.stars;
    
    for (var i=0; i < stars; i++) {
      <Linericon name='Star' size={28} color='#FFCB05' />
    }
  
}








  pickerValues = (data) => {
   
  
    if (this.state.qualities === "Professionalism" ) {
      return (
      <View>
      <Row>
      <Label style={styles.labelstyle}>
      {data.name}</Label>
      </Row>
      <Row >
      <Content>
      <Item style={{borderRadius: 5, borderWidth: 1}}  regular>
         <Input style={styles.inputstyle} 
         multiline  />
       </Item>
      </Content>
        </Row>
        </View>)
    }
    else  if (this.state.qualities === "Team Work" ) {
      return (  
      <View>
         <Row>
         <Content>
         <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
         <CheckBox
  center
   color="#A7A9AC"
  checked={this.state.checkbox}
  onPress={() => this.toggleSwitch()}
/>

<Text style={{ fontFamily:'avenir light', fontSize: 12, fontWeight: 'normal', marginLeft: 15 }}>{data.name}</Text>
      </View>    
</Content>
           </Row>
         </View>)
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
                        {/* <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' />
                        <Linericon name='Star' size={28} color='#FFCB05' /> */}
                        {this.generateStars}
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
        {/* <View> */}
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
         {/* </View> */}
              </Row>

         
          
             
              {questionnaire[this.state.qualities].map((data, i) =>
                
                this.pickerValues(data)
)}
 
 {/* <View>
<Row>
<Label style={styles.labelstyle}>
{data['name']}</Label>
</Row>
<Row >
<Content>
<Item style={{borderRadius: 5, borderWidth: 1}}  regular>
   <Input style={styles.inputstyle} 
   multiline  />
 </Item>
</Content>
  </Row> 
                </View>  */}
                
               

         {/* <Row>
         <Label style={styles.labelstyle}>
         I've observed that</Label>
         </Row>
         <Row >
         <Content>
         <Item style={{borderRadius: 5, borderWidth: 1}}  regular>
            <Input style={styles.inputstyle} 
            multiline placeholder='your assessment for a recent chest pain call was spot on' />
          </Item>
         </Content>
        
           </Row>

           <Row>
           <Label style={styles.labelstyle}>
         I mention this because</Label>
         </Row>
         <Row>
         <Content>
         <Item style={{borderRadius: 5, borderWidth: 1}} regular>
            <Input  style={styles.inputstyle}  multiline placeholder='I was impressed with your clinical skills' />
          </Item>
         
         </Content>
         
           </Row>

           <Row>
         <Label style={styles.labelstyle}>
         One suggestion that I have</Label>
         </Row>
         <Row>
         <Content>
         <Item style={{borderRadius: 5, borderWidth: 1}} regular>
            <Input style={styles.inputstyle} multiline placeholder='is to keep up the good' />
          </Item>
         </Content>
           </Row> */}
           
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
    // marginLeft: '20%',
    // marginRight: '80%',
     marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: 'red'
},
pickerContainer: {
  width: '100%',
  height: 50,
  backgroundColor: '#FDE5BE',
  borderWidth: 1,
  borderColor :'#CB9B41',
  // marginLeft: '20%',
  // marginRight: '80%',
  //  marginTop: 20
  borderRadius: 5,
  flexDirection: 'column',
  alignItems: 'center',
  // backgroundColor: 'red'
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