import { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  MiniMap,
  Controls,
  Background,
  useReactFlow,
  ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';

import DatasetNode from './nodes/startpoint/dataset/DatasetNode.js';
import TargetNode from './nodes/preprocessing/target/TargetNode.js';
import ImportNode from './nodes/startpoint/import/ImportNode.js';
import ModifierNode from './nodes/preprocessing/modifier/ModifierNode.js';
import ModelNode from './nodes/training/model/ModelNode.js';

import './nodes/startpoint/dataset/dataset-node.css';
import './nodes/preprocessing/target/target-node.css';
import './nodes/startpoint/import/import-node.css';
import './nodes/preprocessing/modifier/modifier-node.css';
import './nodes/training/model/model-node.css';

const initialNodes = [
  {
    id: 'node-1',
    type: 'datasetnode',
    position: { x: 0, y: 0 }
  },
  {
    id: 'node-2',
    type: 'modelnode',
    targetPosition: 'top',
    position: { x: 300, y: 0 },
    data: { label: 'node 2' },
    sourcePosition: 'right',
    targetPosition: 'left'
  }
];

const initialEdges = [
  { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
];

const nodeTypes = { 
  datasetnode: DatasetNode,
  // targetnode: TargetNode,
  // importnode: ImportNode,
  // modifiernode: ModifierNode
  modelnode: ModelNode
};

let nodeId = 0

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const reactFlowInstance = useReactFlow();
  const addDatasetNode = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      type: 'datasetnode'
    };
    reactFlowInstance.addNodes(newNode);
  }, []);
  const addTargetNode = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      type: 'targetnode'
    };
    reactFlowInstance.addNodes(newNode);
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=JetBrains+Mono" />
      <div style={{ backgroundColor: '#1C1C1C', height: 790, width: '15%', marginLeft: 0, marginRight: 'auto', float: 'left' }}>
        <button onClick={addDatasetNode}>
          Add Dataset Node
        </button>
        <br/>
      </div>
      <div style={{ height: 790, width: '85%', marginLeft: 'auto', marginRight: 0, float: 'right' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={{ backgroundColor: '#1C1C1C' }}
        >
          <Background />
        </ReactFlow>
      </div>
    </>
  );
}

export default function () {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}