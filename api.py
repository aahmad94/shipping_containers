from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS


app = Flask(__name__)
CORS(app) # Allow cross-origin access
api = Api(app)

class Containers(Resource):
    def get(self):
        return [
            {'id': 0, 'container_number': 'MSCU1252187'},
            {'id': 1, 'container_number': 'CMAU2810425'},
            {'id': 2, 'container_number': 'TCNU8826101'},
            {'id': 3, 'container_number': 'OOLU2719472'},
            {'id': 4, 'container_number': 'INKU9639135'},
            {'id': 5, 'container_number': 'OOLU3661521'},
            {'id': 6, 'container_number': 'MSCU9720178'},
            {'id': 7, 'container_number': 'UETU5621863'},
            {'id': 8, 'container_number': 'OOLU7421963'},
            {'id': 9, 'container_number': 'CMAU7363553'},
            {'id': 10, 'container_number': 'TCNU6411331'},
            {'id': 11, 'container_number': 'UETU5621863'},
            {'id': 12, 'container_number': 'OOLU3661521'},
            {'id': 13, 'container_number': 'CMAU2810425'},
            {'id': 14, 'container_number': 'CCLU1820517'},
            {'id': 15, 'container_number': 'HJCU2217259'},
            {'id': 16, 'container_number': 'INKU7261444'},
            {'id': 17, 'container_number': 'MSCU2414642'},
            {'id': 18, 'container_number': 'MSCU2313415'},
            {'id': 19, 'container_number': 'CMAU7315421'}
        ]


class Vessels(Resource):
    def get(self):
        return [
            {"id": 0, "name": "CMA CGM BENJAMIN FRANKLIN"},
            {"id": 1, "name": "CORNELIUS MAERSK"},
            {"id": 2, "name": "MOL GLIDE"}
        ]


VESSEL_PLANS = []

class VesselPlan(Resource):
    def get(self):
        """
        Returns a dictionary where the key is a vessel id, and the value is a list of containers assigned to that vessel
        e.g.:
        [
            { 
               "vessel_id": 0,
               "container_ids": [1, 4, 7] 
            },
            { 
               "vessel_id": 2,
               "container_ids": [2, 3, 17, 19] 
            },
        [
        """
        return VESSEL_PLANS

    def post(self):
        """
        Example: curl -H "Accept: application/json" -X POST  -d '{"vessel_id": 2, "container_ids": [1, 8, 3]}' http://127.0.0.1:8000/vessel_plans
        """
        json_data = request.get_json(force=True)
        vessel_id = json_data.get('vessel_id', None)
        container_ids = json_data.get('container_ids', None)
        if vessel_id is None:
            return {"message": "vessel_id needs to be populated"}
        if container_ids is None:
            return {"message": "container_ids needs to be populated"}

        new_vessel_plan = {"vessel_id": vessel_id, "container_ids": container_ids}
        VESSEL_PLANS.append(new_vessel_plan)
        return new_vessel_plan


api.add_resource(Containers, '/containers')
api.add_resource(Vessels, '/vessels')
api.add_resource(VesselPlan, '/vessel_plans')

if __name__ == '__main__':
    app.run(debug=True, port=8000)
