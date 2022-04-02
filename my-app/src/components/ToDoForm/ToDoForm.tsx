import React, { FC,  useRef } from "react";

//sarkum enq interface vor knkaragri ax mtnoc special property ery compenent-um


interface  TododFormProps{
    onAdd(title:string):void
//ToDoForm -y ban chi veradarcnum uxaki forma-aia 

}


export const ToDoForm: FC<TododFormProps> = (props) => {










    // const [title, setTitle] = useState<string>('')
    //talisenq initial state -y string( u cuic enq talu ete apagum uzumenq mer state ashxati string-i het <string>)

    // const changeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
    // setTitle(event.target.value)
    //ira shnorhive karum enq poxacy tpenq
    // }



    const ref = useRef<HTMLInputElement>(null)//ashxatum enq html elemnt-i het
    const KeyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            //     console.log(title);
            props.onAdd(ref.current!.value)//djvar object atark lini
            ref.current!.value=""
            //hastat datark  klini
            // setTitle('')
            //ete event -i dashti key -y havasara Enter-in tox tpi

        }
    }
    return (
        <div className="input-field m2">
            <input
                ref={ref}
              
                id="title"
                placeholder="text"
                onKeyPress={KeyPressHandler}
            />
            <label htmlFor="title" className="active"></label>
        </div>
    )

}