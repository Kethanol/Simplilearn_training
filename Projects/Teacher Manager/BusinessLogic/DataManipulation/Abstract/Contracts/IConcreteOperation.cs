﻿namespace BusinessLogic.DataManipulation.Abstract
{
    public interface IConcreteOperation
    {
        void Add();
        void Retrieve();
        void RetrieveById(int id);
    }
}
