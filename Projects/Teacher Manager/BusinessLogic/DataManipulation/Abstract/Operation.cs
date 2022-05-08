﻿using BusinessLogic.DataManipulation.Abstract;
using BusinessLogic.DataManipulation.Concrete;

namespace BusinessLogic.DataManipulation
{
    public abstract class Operation
    {
        private IOption _concreteOperation;

        public abstract void ExecuteOperation(IOption concreteOperation);

        public void Run()
        {
            // Here we can write some general logic before choosing the instance what we use
            // We have just the Teacher entity for now, may be used in the future with other entities

            _concreteOperation = TeacherOperation.GetInstance();

            ExecuteOperation(_concreteOperation);
        }
    }
}
