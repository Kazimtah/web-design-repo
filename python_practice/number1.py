{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 1,
   "id": "a22ddde5",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "[1, 2, 3, 4, 5, 10, 11, 13, 14]"
      ]
     },
     "execution_count": 1,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "import numpy as np\n",
    "\n",
    "a = [1,2,3,4,5]\n",
    "b = [10,11,13,14]\n",
    "a + b\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "id": "b66b9644",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "[11, 13, 16, 18]\n"
     ]
    }
   ],
   "source": [
    "result = []\n",
    "for first, second in zip(a,b):\n",
    "    result.append(first+second)\n",
    "\n",
    "print(result)\n",
    "    "
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 10,
   "id": "e4d9b49f",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "1\n",
      "1\n",
      "(5,)\n",
      "(5,)\n",
      "1\n",
      "(4,)\n"
     ]
    },
    {
     "data": {
      "text/plain": [
       "dtype('float64')"
      ]
     },
     "execution_count": 10,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "import numpy as np\n",
    "\n",
    "a = np.array([1,2,3,4,5])\n",
    "b = np.array([10,11,12,13,14])\n",
    "type(a)\n",
    "type(b)\n",
    "print(a.ndim)\n",
    "print(b.ndim)\n",
    "print(a.shape)\n",
    "print(b.shape)\n",
    "\n",
    "(a.dtype)\n",
    "(b.dtype)\n",
    "\n",
    "f = np.array([1,2.2,3.5, 6])\n",
    "print(f.ndim)\n",
    "print(f.shape)\n",
    "type(f)\n",
    "f.dtype"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 21,
   "id": "5cbea7e3",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "[10 22 36 52 70]\n",
      "[0.1        0.18181818 0.25       0.30769231 0.35714286]\n",
      "[         1       2048     531441   67108864 6103515625]\n",
      "[    10    121   1728  28561 537824]\n",
      "[ 0.84147098  0.90929743  0.14112001 -0.7568025  -0.95892427]\n"
     ]
    },
    {
     "data": {
      "text/plain": [
       "array([ 0.84147098,  0.90929743,  0.14112001, -0.7568025 , -0.95892427])"
      ]
     },
     "execution_count": 21,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "a = np.array([1,2,3,4,5])\n",
    "b = np.array([10,11,12,13, 14])\n",
    "a + b\n",
    "print(a*b)\n",
    "print(a/b)\n",
    "print(a**b)\n",
    "print(b**a)\n",
    "print(np.sin(a))\n",
    "a * 10\n",
    "np.sin(a)\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 39,
   "id": "e89db5bc",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "(2, 4)\n",
      "8\n",
      "2\n",
      "[[ 1  2  4  5]\n",
      " [10 11 12 25]]\n",
      "[1 2 4 5]\n"
     ]
    }
   ],
   "source": [
    "\n",
    "a = np.array([[1,2,4,5],[10,11,12,13]])\n",
    "print(a.shape)\n",
    "print(a.size)\n",
    "print(a.ndim)\n",
    "a[1,3]\n",
    "a[1,3] = 25\n",
    "print(a)\n",
    "print(a[0])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 45,
   "id": "4e15cda5",
   "metadata": {},
   "outputs": [],
   "source": [
    "import numpy as np\n",
    "a = np.arange(25).reshape(5,5)"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.6.8"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
