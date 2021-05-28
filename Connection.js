class Connection{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        this.body = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.body);
    }

    fly(){
    this.body.bodyA=null;

    }
    attach(body){
    this.body.bodyA=body;
    }
    display(){
        if (this.body.bodyA){
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("black");
        line(pointA.x+20, pointA.y+20, pointB.x, pointB.y);
        }
    }
  
    
}