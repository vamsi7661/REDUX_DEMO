import { connect } from "react-redux";
import {incrimentCount,decrimentCount} from './CounterRedux/index'
const Counter = (props) => {

  return (
    <>
      <div style={{ textAlign: "Center" }}>
        <div>
          <h4>
            Counter:
            <span>
              <b>{props.count}</b>
            </span>
          </h4>
        </div>
        <button type="button"  onClick={props.inc} >
          increment Count
        </button>
        <button type="button" onClick={props.dec} disabled={props.count===0}>
          decriment Count
        </button>
      </div>
    </>
  );
};

const mapStateToProps=(state)=>{
    return{
        count:state.counting.counter
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        inc:()=>dispatch(incrimentCount()),
        dec:()=>dispatch(decrimentCount())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
