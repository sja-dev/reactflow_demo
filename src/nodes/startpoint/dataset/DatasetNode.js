import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function DatasetNode() {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="dataset-node">
      <div>
        <label htmlFor="text" className="dataset-node_label">DATASET</label>
        <label for="file">
          <div className="dataset-node_upload">Upload CSV File</div>
        </label>
        <input type="file" name="file" id="file" accept=".csv" />
      </div>
      {/* <Handle type="source" position={Position.Right} className="dataset-node_tablesource" />
      <br />
      <br /> */}
      <Handle type="source" position={Position.Right} className="dataset-node_modelsource" />
    </div>
  );
}

export default DatasetNode;
