import React, { Component } from 'react'
import StepNav from '../Components/StepNav'
import Comments from '../Components/Comments'
import Header from '../Shared/Header'

class RecipeDetails extends Component {
  constructor() {
    super()
    this.state = {
      recipe: null
    }
  }
  componentDidMount() {
    this.setState({
      recipe: "hey"
    })
  }

  render() {
    return (
      <>
        <div class="container bg-white mx-auto px-4 font-serif">
          <Header />
        </div>
        <div class="xl:flex container mx-auto my-16 px-4">

          {/* Recipe Details Page */}
          <aside class="xl:w-1/4 xl:sticky mb-4 xl:mb-0" >
            <StepNav />
          </aside>
          <div>

            <h3 class="text-2xl text-bold mb-5">Recipe Title</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda laudantium et unde cupiditate esse? Perferendis deleniti dignissimos eaque obcaecati soluta officia distinctio aspernatur quisquam consequuntur aliquid ut, est quis itaque, incidunt dolorum non, consectetur alias debitis libero optio doloribus! Rerum porro laboriosam, voluptas iure tempora dolorum molestias? Ducimus, repellat veritatis?
            <img class="w-full h-full object-cover" src={"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} />
            <br />
            Odio id perspiciatis quaerat aut itaque, voluptatibus atque, sit dolore perferendis placeat maxime deserunt officia minima! Beatae quod numquam porro sint eaque est! Eos culpa animi ipsum. Vitae nostrum esse ipsa, quasi corporis assumenda nobis! Aut temporibus ab corrupti neque soluta et necessitatibus error. Vitae doloribus ad laudantium amet magnam.
            <img class="w-full h-full object-cover" src={"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} />
            <br />
            Beatae amet enim laudantium unde nostrum? Dicta cum quibusdam, consequuntur omnis odio recusandae nemo in dolor, numquam molestias, iusto illum unde quaerat hic! Sint cum aut sunt, porro atque numquam mollitia earum, aliquam dicta quaerat voluptas optio, odio iure fugit labore modi quia. Corporis tenetur ducimus, fugiat nostrum unde debitis!
            <img class="w-full h-full object-cover" src={"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} />
            <br />
            Amet, quaerat minus laudantium odit culpa natus fugiat placeat quia id aperiam ut maiores fuga incidunt accusamus optio nostrum pariatur. Non perferendis id vero atque amet animi aperiam maiores expedita ea ullam, sapiente libero impedit officiis delectus beatae rem nostrum voluptatem ex iure! Non impedit dolores eum dicta dolorem quidem.
            <img class="w-full h-full object-cover" src={"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} />
            <br />
            Recusandae atque iusto doloribus nostrum, modi sed nisi quaerat omnis sunt dolor vel fugiat eos eligendi quasi earum odio porro error. Esse quam autem blanditiis suscipit culpa, possimus dolorem, unde eaque rerum doloremque excepturi ex incidunt dolores atque. Molestias at ratione a optio consequuntur vero accusantium, rem tempore nisi asperiores?
            <img class="w-full h-full object-cover" src={"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} />
            <br />
            <h3 class="text-2xl text-bold mb-5">You're Finished!</h3>
          </div>
          <div class="xl:w-3/4">
            <Comments testString={this.state.recipe} />
          </div>

        </div>
      </>
    )
  }
}
export default RecipeDetails
