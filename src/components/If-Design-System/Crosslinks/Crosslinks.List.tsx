import React from 'react';

interface IListProps {
    title:string,
    href: string     
    [x: string]: any,
}

export const ListCrosslink: React.FC<IListProps> = ({
    title,
    href,
    ...props
}) => {
    return (
        <li className="if" role="presentation" {...props}>
            <a className="if standalone" href={href}>{title}</a>
        </li>
    );
}

interface IListContainerProps {
    children: any,
    title: string,
    titleSize: string,
    [x: string]: any,
}

export const ListCrosslinkContainer: React.FC<IListContainerProps> = ({
    children = null,
    title = "",
    titleSize = "medium",
    ...props
}) => {
    return (
        <div className="if col">
            <h2 className={`if heading ${titleSize}`}>{title}</h2>
            <ul role="presentation" className={`if crosslinks list`} {...props}>{children}</ul>
        </div> 
    );
}

/*
<div class="if row">
      <div class="if col">
        <h2 class="if heading medium">Innehålstittel</h2>
        <ul role="presentation" class="if crosslinks list">
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Betalningsguide</a>
          </li>
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Därfor väljer du If</a>
          </li>
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Säkerhetsbutikken</a>
          </li>
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Tryggare vardag</a>
          </li>
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Inför pensionen</a>
          </li>
        </ul>
      </div>
      <div class="if col">
        <h2 class="if heading medium">Innehålstittel</h2>
        <ul role="presentation" class="if crosslinks list">
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Betalningsguide</a>
          </li>
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Därfor väljer du If</a>
          </li>
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Säkerhetsbutikken</a>
          </li>
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Tryggare vardag</a>
          </li>
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Inför pensionen</a>
          </li>
        </ul>
      </div>
      <div class="if col">
        <h2 class="if heading medium">Innehålstittel</h2>
        <ul role="presentation" class="if crosslinks list">
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Betalningsguide</a>
          </li>
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Därfor väljer du If</a>
          </li>
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Säkerhetsbutikken</a>
          </li>
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Tryggare vardag</a>
          </li>
          <li role="presentation" class="if">
            <a class="if standalone" href="/asdsadsdsada222">Inför pensionen</a>
          </li>
        </ul>
      </div>
    </div>
    */