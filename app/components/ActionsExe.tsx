"use client"
import { Button } from '@/components/button';
import Stack from '@/lib/stack';
import { memo, useEffect, useRef, useState } from 'react';

const ActionsExe = () => {

    const [counter, setCounter] = useState(0);
    const undoRef = useRef(new Stack<number>())
    const redoRef = useRef(new Stack<number>())
    const counterRef = useRef(counter);

    useEffect(() => {
        counterRef.current = counter;
    }, [counter]);

    const handleIncrement = () => {
        undoRef.current.push(counterRef.current);
        redoRef.current = new Stack<number>();
        setCounter(counterRef.current + 1);
    }

    const handleDecrement = () => {
        undoRef.current.push(counterRef.current);
        redoRef.current = new Stack<number>();
        setCounter(counterRef.current - 1);
    }

    const handleUndo = () => {
        if(undoRef.current.isEmpty()) return;
        const prevValue = undoRef.current.peek();
        redoRef.current.push(counterRef.current);
        setCounter(prevValue);
        undoRef.current.pop();
    }

    const handleRedo = () => {
        if(redoRef.current.isEmpty()) return;

        const nextValue = redoRef.current.peek();
        undoRef.current.push(counterRef.current);
        setCounter(nextValue);
        redoRef.current.pop();
    }
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if(e.ctrlKey && e.key === 'z') {
                e.preventDefault();
                handleUndo();
            }
            if(e.ctrlKey && e.key === 'y') {
                e.preventDefault();
                handleRedo();
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [])
  return (
    <div className='flex flex-col gap-2 items-start justify-start p-4 border border-gray-200 rounded-md'>
        <h2 className="text-xl font-bold">Oh yes daddy!</h2>
        <p>Counter: {counter}</p>

        <Button className="border border-amber-200" variant="default" onClick={handleIncrement}>
            Increment
        </Button>
        <Button className='border border-amber-200' variant="default" onClick={handleDecrement}>
            Decrement
        </Button>
    </div>
  );
}
export default memo(ActionsExe);