class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("CAR RACING GAME")
        title.position(380,0)
        var input=createInput("name")
        var button = createButton('play')
        var greeting = createElement('h3')
        input.position(430,160)
        button.position(550,200)


        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            
            var greeting=createElement('h3')
            greeting.html("Hello "+ name )
            greeting.position(430,160)
            
        })
    }
}