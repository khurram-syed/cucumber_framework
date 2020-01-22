
const settings = {
    method : 'POST',
    headers : {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      }
      ,body: null
  }
const submitDistance12= {
    "DataInstances": [
      {
        "IsRequested": true,
        "DataItemId": 10002,
        "Name": "Distance",
        "Id": 70000,
        "RefId": "70000",
        "ParentGuidelineInstanceKey": "guidValue",
         "Values": [
          "12"
        ],
        "IsDataItem": true,
      }
     ]
    }
 const decideDistance={
    "TaskInstances": [
     { "Type": 2,
       "State": 7,
       "TaskID": 10003,
       "Name": "Decide_Distance",
       "Id": 10002,
       "RefId": "10002",
       "ParentGuideline": "SimpleDistance",
       "ParentGuidelineInstanceKey": "guidValue",
       "IsDataItem": false,
       "SelectedCandidates": ["shorter" ]
     }
   ]
 }
  const  submit4Actions = 
    {
  
        "TaskInstances": [
          { 
            "Type": 1,
            "State": 8,
            "TaskActivity": 0,
            "Id": 10003,      
            "Name": "Action_With_Schedule_Constraint",
            "RefId": "10003",
            "ParentGuidelineInstanceKey": "guidValue",
           },
          {
            "Type": 1,
            "State": 8,
            "TaskActivity": 0,
            "Name": "Action_With_Schedule_Constraint_And_Pre_Cond",
            "Id": 10005,
            "RefId": "10005",
            "ParentGuideline": "SimpleDistance",
            "ParentGuidelineInstanceKey": "guidValue"
          },
          {
            "Type": 1,
            "State": 8,
            "TaskActivity": 0,
            "Name": "Action_With_IT",
            "Id": 10006,
            "RefId": "10006",
            "ParentGuideline": "SimpleDistance",
            "ParentGuidelineInstanceKey": "guidValue"
          },
          {
            "Type": 1,
            "State": 8,
            "TaskActivity": 0,
            "Name": "Action_With_Schedule_Constraint_And_IT",
            "Id": 10007,
            "RefId": "10007",
            "ParentGuideline": "SimpleDistance",
            "ParentGuidelineInstanceKey": "guidValue"
          }
        ]
      }
  

 var replaceGuid=(guid,givenObj)=>{ 
      var strGivenObj= JSON.stringify(givenObj);
      var updatedData= strGivenObj.replace(/guidValue/g,guid)
      return updatedData;
  }

  module.exports = { settings, 
    replaceGuid,
      decideDistance,
      submitDistance12,
      submit4Actions
    }
  