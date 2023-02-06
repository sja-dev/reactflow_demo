import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function ModifierNode() {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const tableList = ['C01A', 'C01B', 'C02A']

  return (
    <div className="modifier-node">
      <div>
        <label htmlFor="text" className="modifier-node_label">MODIFY</label>
        {
            tableList.map(x =>
                <input className="modifier-node_editable" defaultValue={x}></input>
            )
        }
      </div>
      <Handle type="target" position={Position.Left} id="b"/>
      <Handle type="source" position={Position.Right} id="b"/>
    </div>
  );
}

export default ModifierNode;
