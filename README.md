# ClearMetal Challenge

### User Interface

![ui](assets/images/organize_containers.gif)

Imagine you work at a port and are in charge of vessel allocations. Each day, you are given
 a list of containers that need to be shipped and a list of vessels that are leaving that day. You need to assign the 
 containers to those vessels so that they can get to their final destinations.  
 
 Your job is to create a frontend that does a super simplified version of this.  
 Specifically, using the API documented below, you should allow the user to:
 1) View all of the containers that need to be shipped 
 2) View the vessels that are leaving today
 3) Assign containers to a vessel
 4) "Save" a vessel plan by posting to the API
 5) View any vessel plans they've created
 
 This is designed to be a fairly open ended challenge.  You shouldn't need to spend more than a couple hours on it.
 We are mainly testing for code design/quality, but we are also interested in your UI design.
 
 We use React (+ Redux) for our frontend at ClearMetal. While you can implement this challenge using any language/library, 
 we encourage you to use React if you feel comfortable doing so.  
 
## API
```api.py``` contains a very simple Flask API

###To run the api:
1) (Optionally) Create a virtualenv <br>
```virtualenv venv```
<br>
 ```source venv/bin/activate```
2) ```pip install -r requirements.txt```
3) ```python api.py```
4) Test it by running: ```curl http://127.0.0.1:8000/containers```


###Endpoints

1) Get a list of containers that need to be shipped
```
GET /containers
```
```
Response:
[
    {"id": 0, "container_number": "MSCU1252187"},
    {"id": 1, "container_number": "CMAU2810425"},
    ...
]
```
2) Get a list of vessels leaving today
```
GET /vessels
```
```
Response:
[
    {"id": 0, "name": "CMA CGM BENJAMIN FRANKLIN"},
    {"id": 1, "name": "CORNELIUS MAERSK"},
    ...
]
```
3) Get a list of vessel plans
```
GET /vessel_plans
```
```
Response:
[
    {
        "vessel_id": 1, 
        "container_ids": [1, 2, 3]
    },
    {
        "vessel_id": 2, 
        "container_ids": [4, 5, 6]
    }
    ...
]
```
4) Post a vessel plan
```
POST /vessel_plans
```
```
Payload Body:
{
    "vessel_id": 1, 
    "container_ids": [1, 2, 3]
}
```
```
Response:
{
    "vessel_id": 1, 
    "container_ids": [1, 2, 3]
}
```
```
Example:
curl -H "Accept: application/json" -X POST  -d '{"vessel_id": 2, "container_ids": [1, 8, 3]}' http://127.0.0.1:8000/vessel_plan
```
